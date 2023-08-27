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
  const options = ['Player Name','Team','Goals','Assists','Saves','Shots','Shot %','MVPs']
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
      {options.map((option) => {
        return(
          <motion.th className="sort-header" onClick={() => {
            (sort[0] === option && sort[1] === 'desc' ? setSort([option, 'asc']) : setSort([option,'desc']))
          }}>
          {(sort[0] === option) ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowUp} beat/> : <FontAwesomeIcon icon={faArrowDown}beat />) : <></>}
          {option}
          </motion.th>
        )
      })}
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