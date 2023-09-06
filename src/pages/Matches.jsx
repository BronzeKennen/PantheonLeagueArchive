import { useState } from "react"
import "../styles/Matches.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)


let { data: replay_file_data, error } = await supabase
  .from('replay_file_data')
  .select('*')

let replays = []
for(let i = 0; i < replay_file_data.length; i += 2) {
    replays.push([replay_file_data[i],replay_file_data[i+1]]);
}


export default function Matches() {
    const [week,setWeek] = useState(0);
    let week_set = new Set();
    replays.map((replay,index) => {
        if(replay[0].week != null) {
            console.log(replay[0].week);
            console.log(replay[1].week);
            week_set.add(replay[0].week);
            week_set.add(replay[1].week);
        }
    })

    const weeks = [...week_set];
    return(
        <>
            <h1>Choose Week</h1>
            {weeks.map((week) => {
                return(<button className="week-button" onClick={() => {setWeek(week)}}>{week}</button>)
            })}
            <div className="matches-grid">
            {replays.map((replay,index) => {
                return(
                    <Match winner={replay[0]} loser={replay[1]} week={week} key={index}/>
                )
            })}
            </div>
        </>
    )
}

function Match(props) {
    const {winner, loser, week} = props;
    if(week === winner.week) {
    return(
        <div className="match-bg">
            <table className="match-info">
                <span className="general-stats">
                    <h4>Regular Season - Week 1</h4>
                    <h4>-</h4>
                    <h4>{winner.map} - {winner.date}</h4>
                </span>
                <tr className="teams-presentation">
                    <td className="team1">
                        <h3>{winner.goals}</h3>
                        <h3>{winner['team name']}</h3>
                        <span>{winner.score}</span>
                        <span>{winner.goals}</span>
                        <span>{winner.assists}</span>
                        <span>{winner.saves}</span>
                        <span>{winner.shots}</span>
                    </td>
                    <td className="stats-middle">
                        <h3>-</h3>
                        <h3>-</h3>
                        <span>Score</span>
                        <span>Goals</span>
                        <span>Assists</span>
                        <span>Saves</span>
                        <span>Shots</span>
                    </td>
                    <td className="team2">
                        <h3>{loser.goals}</h3>
                        <h3>{loser['team name']}</h3>
                        <span>{loser.score}</span>
                        <span>{loser.goals}</span>
                        <span>{loser.assists}</span>
                        <span>{loser.saves}</span>
                        <span>{loser.shots}</span>
                    </td>
                </tr>
            </table>
        </div>
    )
    }
}


// Stats:
// id
// title
// map 
// date 
// result 
// team name
// opposing team ?
// score 
// goals 
// assists 
// saves 
// shots 
// shooting_percentage