import "../styles/Teams.css"

export default function Tournaments() {
  return (
    <>
    <div className="tour-tab">
      <h1 id="tour-title">Tournaments</h1>
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
      <h2>Team Name</h2>
      <span>Team Members</span>
      <span>Logo or smth idk</span>
      <button>More Info</button>
    </div>
  )
}