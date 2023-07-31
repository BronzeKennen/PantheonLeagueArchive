import "../styles/NavBar.css"
export default function NavBar() {
  return (
        <nav className="NavBar">
            <ul>
                <li><a href="./Home" className="site-title ">RLTG</a></li>
                <li><a href="./Tournaments">Tournaments</a></li>
                <li><a href="./signin" className="sign-in">Sign in</a></li>
            </ul>
        </nav>
    )
}
