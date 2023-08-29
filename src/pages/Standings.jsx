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

    const [hoveredPlayer, setHoveredPlayer] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0});

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setMousePosition({x: clientX, y:clientY});
    };
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
                <span className="team-rest">
                    <span>{team.wins} - {team.losses}</span>
                </span>
            </span>
            <span className="team-players">
                <h3>
                <motion.span
                    whileHover={{
                        color: 'orange'
                    }}
                    transition={{type: 'spring', stiffness: 300}}
                    onMouseMove={handleMouseMove}
                    onMouseOver={() => setHoveredPlayer(team.player1)}
                    onMouseOut={() => setHoveredPlayer(null)}>{team.player1}
                </motion.span></h3>
                <h3><motion.span
                    whileHover={{
                        color: 'orange'
                    }}
                    transition={{type: 'spring', stiffness: 300}}
                    onMouseMove={handleMouseMove}
                    onMouseOver={() => setHoveredPlayer(team.player2)}
                    onMouseOut={() => setHoveredPlayer(null)}>{team.player2}
                </motion.span></h3>
                <h3><motion.span
                    whileHover={{
                        color: 'orange'
                    }}
                    transition={{type: 'spring', stiffness: 300}}
                    onMouseMove={handleMouseMove}
                    onMouseOver={() => setHoveredPlayer(team.player3)}
                    onMouseOut={() => setHoveredPlayer(null)}>{team.player3}
                </motion.span></h3>
            </span>
            {hoveredPlayer && players.map((player) => {if(player.name === hoveredPlayer) return(<PlayerHover key={player.name} player={player} x={mousePosition.x} y={mousePosition.y}/>)}) }
        </motion.div>
    )
}


function PlayerHover(props) {
    const {player,x,y} = props;
    const style = {
        position:'absolute',
        left: (-x/1.5 + (75 * window.innerWidth / 100)),
        top:  y+50,
    }
    return(
        <motion.div
        animate={{
            opacity: 1
        }}
        transition={{opacity: {duration:.4}}}        
        className="player-hover-window" style={style}>
            <span>Team: {player.team} </span>
            <span>Name: {player.name}</span>
            <div className="lines">
            <div className="line">
                <span>Goals: {player.goals}</span>
                <span>Assists: {player.assists}</span>
                <span>Saves: {player.saves}</span>
            </div>
            <div className="line">
                <span>Shot %: {player.shooting_percentage}</span>
                <span>MVP: {player.mvp}</span>
            </div>
            </div>
        </motion.div>
    )
}