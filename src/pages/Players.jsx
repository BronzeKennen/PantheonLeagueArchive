import "../styles/Players.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: players, error } = await supabase
  .from('players')
  .select('*')

let { data: teams } = await supabase
  .from('teams')
  .select('*')

export default function Tournaments() {
  return (
    <>
    <div className="tour-tab">
      <h1 id="tour-title">Players</h1>
    </div>
    <div className="tournament-container">
      {players.map(player => {
        return(<PlayerComponent player={player} key={player}/>)
      })}
    </div>
    </>
  )
}

function PlayerComponent(player) {
  return(
    <div className="tour-component">
      <div className="name-team">
        <h1>{player.player.name}</h1>
        <h2>{player.player.team}</h2>
      </div>
      <span>stat1</span>
      <span>Team</span>
      <button>idk</button>
    </div>
  )
}