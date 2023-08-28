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
    return(
        replays.map((replay,index) => {
            return(
                <Match winner={replay[0]} loser={replay[1]} key={index}/>
            )
        })
    )
}

function Match(props) {
    const {winner, loser} = props;
    console.log(winner);
    return(
        <div className="match-bg">
            <table className="match-info">
                <span className="general-stats">
                    <h2>Regular Season - Week (insert number)</h2>
                    <h2>{winner.map} - {winner.date}</h2>
                </span>
                <p>{winner.goals} - {loser.goals}</p>
                <tr className="teams-presentation">
                    <td className="team1">
                        <h2>{winner['team name']}</h2>
                        <span>Team Logo</span>
                        <span>Score: {winner.score}</span>
                        <span>Goals: {winner.goals}</span>
                        <span>Assists: {winner.assists}</span>
                        <span>Saves: {winner.saves}</span>
                        <span>Shots:{winner.shots}</span>
                        <span>Shot %: {winner.shooting_percentage}</span>
                    </td>
                    <td className="team2">
                        <h2>{loser['team name']}</h2>
                        <span>Team Logo</span>
                        <span>Score: {loser.score}</span>
                        <span>Goals: {loser.goals}</span>
                        <span>Assists: {loser.assists}</span>
                        <span>Saves: {loser.saves}</span>
                        <span>Shots:{loser.shots}</span>
                        <span>Shot %: {loser.shooting_percentage}</span>
                    </td>
                </tr>
            </table>
        </div>
    )
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