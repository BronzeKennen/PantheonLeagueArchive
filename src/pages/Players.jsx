import "../styles/Players.css"
import { createClient } from '@supabase/supabase-js'
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
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
  const [playersState, setPlayersState] = useState(players);

  useEffect(() => {
    const sortedPlayers = [...players];

    if(sort[1] === 'asc') {
      switch(sort[0]) {
        case 'Player Name':
          players = players.sort((a,b) => {return (a.name.localeCompare(b.name))})
          break;
        case 'Team':
          players = players.sort((a,b) => {return (a.team.localeCompare(b.team))})
          break;
        case 'Goals':
          players = players.sort((a,b) => {return (a.goals - b.goals)})
          break;
        case 'Assists':
          players = players.sort((a,b) => {return (a.assists - b.assists)})
          break;
        case 'Saves':
          players = players.sort((a,b) => {return (a.saves - b.saves)})
          break;
        case 'Shots':
          players = players.sort((a,b) => {return (a.shots - b.shots)})
          break;
        case 'Shot %':
          players = players.sort((a,b) => {return (a.shooting_percentage - b.shooting_percentage)})
          break;
        case 'MVPs':
          players = players.sort((a,b) => {return (a.mvp - b.mvp)})
          break;
        }
      } else {
        switch(sort[0]) {
          case 'Player Name':
            players = players.sort((a,b) => {return (b.name.localeCompare(a.name))})
            break;
          case 'Team':
            players = players.sort((a,b) => {return (b.team.localeCompare(a.team))})
            break;
          case 'Goals':
            players = players.sort((a,b) => {return (b.goals - a.goals)})
            break;
          case 'Assists':
            players = players.sort((a,b) => {return (b.assists - a.assists)})
            break;
          case 'Saves':
            players = players.sort((a,b) => {return (b.saves - a.saves)})
            break;
          case 'Shots':
            players = players.sort((a,b) => {return (b.shots - a.shots)})
            break;
          case 'Shot %':
            players = players.sort((a,b) => {return (b.shooting_percentage - a.shooting_percentage)})
            break;
          case 'MVPs':
            players = players.sort((a,b) => {return (b.mvp - a.mvp)})
            break;
        }
      }

      setPlayersState(sortedPlayers)
  }, [sort]);
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
          <motion.th key={option} className="sort-header" onClick={() => {
            (sort[0] === option && sort[1] === 'desc' ? setSort([option, 'asc']) : setSort([option,'desc']))
          }}>
          {(sort[0] === option) ? (sort[1] === 'desc' ? <FontAwesomeIcon icon={faArrowDown} beat/> : <FontAwesomeIcon icon={faArrowUp}beat />) : <></>}
          {option}
          </motion.th>
        )
      })}
      </tr>
          {players.map((player,index) => {
            return <PlayerComponent player={player} key={player.name} index={index} />;
          })}
    </tbody>
    </table>
    </>
  )
}

function PlayerComponent(props) {
  const {player,index} = props;
  return(
    <motion.tr className="player-fadein-stats"
    animate={{
      opacity: 1
    }}
    transition={{opacity: {duration:.4, delay:(index/10)}}}
    >
      <td className="player-name">{player.name}</td>
      <td>{player.team}</td>
      <td>{player.goals}</td>
      <td>{player.assists}</td>
      <td>{player.saves}</td>
      <td>{player.shots}</td>
      <td>{player.shooting_percentage} </td>
      <td>{player.mvp}</td>
    </motion.tr>

  )
}