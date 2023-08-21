import "../styles/Standings.css"

export default function Standings() {
    return (<TeamStanding/>)
}

function TeamStanding() {
    return(
        <div className="team-standings-component">
            <h1>Team Name</h1>
            <ul className="team-stats">
                <li><h3>League Play Position:</h3></li>
                <li><h3>Playoffs position</h3></li>
                <li><h3>Series Score:</h3></li>
            </ul>
        </div>
    )
}