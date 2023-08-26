import "../styles/Players.css"
import { createClient } from '@supabase/supabase-js'
import { faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: players, error } = await supabase
  .from('players')
  .select('*')

let { data: teams } = await supabase
  .from('teams')
  .select('*')

export default function Leaderboard() {
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
        <th><FontAwesomeIcon icon={faArrowUp}/> Player Name</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Team</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Goals</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Assists</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Saves</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Shots</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> Shot %</th>
        <th><FontAwesomeIcon icon={faArrowUp}/> MVP</th>
      </tr>
          {players.map(player => {
            return <PlayerComponent player={player} key={player} />;
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