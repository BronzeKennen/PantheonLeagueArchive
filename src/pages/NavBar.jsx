import "../styles/NavBar.css"
export default function NavBar() {

  const path = window.location.pathname;

  return (
        <nav className="NavBar">
            <ul>
                <li><a href="./Home" className={path === '/Home' ? 'active site-title' : 'site-title'}>RLTG</a></li>
                <li><a href="./Tournaments" className={path === '/Tournaments' ? 'active rest' : 'rest'}>Tournaments</a></li>
            </ul>
            <ul>
                <li><a href="./signin" className={path === '/signin' ? 'active sign-in' : 'sign-in'}>Sign in</a></li>
            </ul>
        </nav>
    )
}
