import "../styles/Players.css"
import { createClient } from '@supabase/supabase-js'
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import {motion} from 'framer-motion'

const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: players, error } = await supabase
  .from('players')
  .select('*')

let { data: teams } = await supabase
  .from('teams')
  .select('*')

export default function Leaderboard() {

  const [sort,setSort] = useState(['none', 'asc']);
  const options = ['player-name','team','goals','assists','saves','shots','shotp','mvp']
  return (
    <>
    <div className="tour-tab">
      <h1 id="tour-title">Leaderboard</h1>
    </div>
    <table className="tournament-container">
    <colgroup>
      <col style={{ width: "20%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
      <col style={{ width: "10%" }} />
    </colgroup>
    <tbody>
      <tr>
        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'player-name' && sort[1] === 'desc' ? setSort(['player-name', 'asc']) : setSort(['player-name', 'desc']))
        }}> 
          {(sort[0] === 'player-name') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
           Player Name
        </motion.th>

        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'team' && sort[1] === 'desc' ? setSort(['team', 'asc']) : setSort(['team', 'desc']))
        }}>
          {(sort[0] === 'team') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
           Team
        </motion.th>

        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'goals' && sort[1] === 'desc' ? setSort(['goals', 'asc']) : setSort(['goals', 'desc']))          
        }}> 
        {(sort[0] === 'goals') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        Goals
        </motion.th>

        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'assists' && sort[1] === 'desc' ? setSort(['assists', 'asc']) : setSort(['assists', 'desc']))          
        }}> 
        {(sort[0] === 'assists') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        Assists
        </motion.th>
        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'saves' && sort[1] === 'desc' ? setSort(['saves', 'asc']) : setSort(['saves', 'desc']))          
        }}> 
        {(sort[0] === 'saves') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        Saves
        </motion.th>
        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'shots' && sort[1] === 'desc' ? setSort(['shots', 'asc']) : setSort(['shots', 'desc']))
        }}> 
        {(sort[0] === 'shots') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        Shots</motion.th>
        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'shotp' && sort[1] === 'desc' ? setSort(['shotp', 'asc']) : setSort(['shotp', 'desc']))
        }}>  
        {(sort[0] === 'shotp') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        Shot %</motion.th>
        <motion.th
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px 2px 2px cyan"
        }}
        className="sort-header" onClick={() => {
          (sort[0] === 'mvp' && sort[1] === 'desc' ? setSort(['mvp', 'asc']) : setSort(['mvp', 'desc']))
        }}> 
        {(sort[0] === 'mvp') ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>} 
        MVP</motion.th>
      </tr>
          {players.map(player => {
            return <PlayerComponent player={player} key={player.name} />;
          })}
    </tbody>
    </table>
    </>
  )
}

function PlayerComponent(props) {
  const {player} = props;
  return(
    <tr>
      <td className="player-name">{player.name}</td>
      <td>{player.team}</td>
      <td>{player.goals}</td>
      <td>{player.assists}</td>
      <td>{player.saves}</td>
      <td>{player.shots}</td>
      <td>{player.shooting_percentage} </td>
      <td>{player.mvp}</td>
    </tr>
  )
}