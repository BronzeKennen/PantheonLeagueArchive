import "../styles/Standings.css"
import { createClient } from '@supabase/supabase-js'
import {motion} from 'framer-motion'
const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: teams, error } = await supabase
  .from('teams')
  .select('*')

export default function Standings() {
    teams.sort((a,b) => b.wins - a.wins)
    return (
        <>
        <h1 id="standings-header">Standings</h1>
        {teams.map((team, index) => {
            return(<TeamStanding index={index} key={team.name} team={team}/>)
        })}
        </>
    )
}

function TeamStanding(props) {
    const {team, index} = props;
    return(
        <motion.div className="team-stand"
            animate={{
                opacity: 1
            }}
            transition={{opacity: {duration:1, delay:(index/4)}}}
        >
            <span className="team-stuff">
                <h3>{team.name}</h3>
                <img className="team-logo" src={team.logo}></img>
            </span>
            <span className="team-rest">
                <span>
                    <p>Series Score</p>
                    <p>{team.wins} - {team.losses}</p>
                </span>
            </span>
                <span className="team-players">
                    <h3>{team.player1}</h3>
                    <h3>{team.player2}</h3>
                    <h3>{team.player3}</h3>
                </span>
        </motion.div>
    )
}