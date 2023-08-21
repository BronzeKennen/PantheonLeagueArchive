import "../styles/NavBar.css"
export default function NavBar() {

  const path = window.location.pathname;

  return (
        <nav className="NavBar">
            <ul>
                <li><a href="./Home" className='site-title'><img src="./pantheon.png"></img></a></li>
                <li><a href="./Standings" className={path === '/Standings' ? 'active rest' : 'rest'}>Standings</a></li>
                <li><a href="./Players" className={path === '/Players' ? 'active rest' : 'rest'}>Players</a></li>
                <li><a href="./Playoffs" className={path === '/Playoffs' ? 'active rest' : 'rest'}>Playoffs</a></li>
                <li><a href="./Matches" className={path === '/Matches' ? 'active rest' : 'rest'}>Matches</a></li>
            </ul> 
            <ul>
                <li><a href="./signin" className={path === '/signin' ? 'active sign-in' : 'sign-in'}>Sign in</a></li>
            </ul>
        </nav>
    )
}
