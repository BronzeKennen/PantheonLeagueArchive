import "../styles/Players.css"
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)

let { data: teams, error } = await supabase
  .from('teams')
  .select('name')

export default function Tournaments() {
  return (
    <>
    <div className="tour-tab">
      <h1 id="tour-title">Players</h1>
    </div>
    <div className="tournament-container">
      <TeamComponent/>
    </div>
    </>
  )
}

function TeamComponent() {
  return(
    <div className="tour-component">
      <h2>Player Name</h2>
      <span>stat1</span>
      <span>Team</span>
      <button>idk</button>
    </div>
  )
}