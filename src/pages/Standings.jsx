import "../styles/Standings.css"
import { createClient } from '@supabase/supabase-js'
import {motion} from 'framer-motion'
import { useState } from "react"
const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: teams, error } = await supabase
  .from('teams')
  .select('*')


let { data: players} = await supabase
  .from('players')
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
    const [hoveredPlayer, setHoveredPlayer] = useState(false);

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
                <h3><span onMouseOver={() => setHoveredPlayer(true)} onMouseOut={() => setHoveredPlayer(false)}>{team.player1}</span></h3>
                <h3><span onMouseOver={() => setHoveredPlayer(true)} onMouseOut={() => setHoveredPlayer(false)}>{team.player2}</span></h3>
                <h3><span onMouseOver={() => setHoveredPlayer(true)} onMouseOut={() => setHoveredPlayer(false)}>{team.player3}</span></h3>
            </span>
            {hoveredPlayer && <PlayerHover player={'test'}/>}
        </motion.div>
    )
}

function PlayerHover(props) {
    const {player} = props;
    console.log("???");
    return(
        <div className="player-hover-window">
            <h3>I am trying to put some teams on hover or whatever the fuck</h3>
        </div>
    )
}