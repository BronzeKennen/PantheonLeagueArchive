import "../styles/Standings.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: teams, error } = await supabase
  .from('teams')
  .select('*')

export default function Standings() {
    return (
        teams.map((team) => {
            console.log(team);
            return (<TeamStanding key={team.name} team={team}/>)
        })
    )
}

function TeamStanding(team) {
    return(
        <div className="team-standings-component">
            <h1>{team.team.name}</h1>
            <div className="team-info">
            <ul className="team-stats"> <h2>Stats</h2>
                <li>League Play Position</li>
                <li>Playoffs position</li>
                <li>Series Score {team.team.wins} - {team.team.losses}</li>
            </ul>
            <ul className="team-stats"> <h2>Players</h2>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4?</li>
            </ul>
            </div>
                <img src={team.team.logo} id="teamlogo"></img>
        </div>
    )
}