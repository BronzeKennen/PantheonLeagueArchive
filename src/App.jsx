import './App.css'
import SignIn from './pages/SignIn';
import Standings from './pages/Standings';
import Home from './pages/Home';
import NavBar from './pages/NavBar'
import Players from './pages/Players'
import Playoffs from './pages/Playoffs'
import Matches from './pages/Matches'


function App() {

  let Component;
  switch(window.location.pathname) {
    case '/Home':
      Component = Home;
      break;
    case '/Standings':
      Component = Standings;
      break;
    case '/Players':
      Component = Players;
      break;
    case '/signin': 
      Component = SignIn;
      break;
    case '/Matches': 
      Component = Matches;
      break;
    case '/Playoffs': 
      Component = Playoffs;
      break;
  }
  return (
    <>
      <NavBar/>
      <Component/>
    </>
  )
}

export default App
