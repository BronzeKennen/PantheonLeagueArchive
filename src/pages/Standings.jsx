import "../styles/Standings.css"
import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: teams, error } = await supabase
  .from('teams')
  .select('*')

export default function Standings() {
    teams.sort((a,b) => b.wins - a.wins)
    return (
        teams.map((team) => {
            return(<TeamStanding key={team.name} team={team}/>)
        })
    )
}

function TeamStanding(team) {
    return(
        <h2>{team.team.name}</h2>
    )
}