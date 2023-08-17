import "../styles/Tournaments.css"

export default function Tournaments() {
  return (
    <>
    <div className="tour-tab">
      <h1 id="tour-title">Tournaments</h1>
    </div>
    <div className="tournament-container">
      <TourComponent/>
    </div>
    </>
  )
}

function TourComponent() {
  return(
    <div className="tour-component">
      <h2>Tournament Name</h2>
      <span>Num of participants</span>
      <span>Date</span>
      <button>VIEW</button>
    </div>
  )
}