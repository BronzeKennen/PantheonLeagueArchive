import "../styles/Matches.css"

export default function Matches() {
    return(
        <Match/>
    )
}

function Match(props) {
    const {match} = props;

    return(
        <div className="match-bg">
            <table className="match-info">
                <span className="general-stats">
                    <h2>Regular Season - Week (insert number)</h2>
                    <h2>Map - Date</h2>
                </span>
                <h3>Result</h3>
                <tr className="teams-presentation">
                    <td className="team1">
                        <h2>Team 1</h2>
                        <span>Team Logo</span>
                        <span>score</span>
                        <span>goals</span>
                        <span>assists</span>
                        <span>saves</span>
                        <span>shots</span>
                        <span>Shot %</span>
                    </td>
                    <td className="team2">
                        <h2>Team 2</h2>
                        <span>Team Logo</span>
                        <span>score</span>
                        <span>goals</span>
                        <span>assists</span>
                        <span>saves</span>
                        <span>shots</span>
                        <span>Shot %</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}


// Stats:
// id
// title
// map 
// date 
// result 
// team name
// opposing team ?
// score 
// goals 
// assists 
// saves 
// shots 
// shooting_percentage