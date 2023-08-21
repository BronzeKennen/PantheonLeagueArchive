import './App.css'
import SignIn from './pages/SignIn';
import Standings from './pages/Standings';
import Home from './pages/Home';
import NavBar from './pages/NavBar'
import Teams from './pages/Teams'

function App() {

  let Component;
  switch(window.location.pathname) {
    case '/Home':
      Component = Home;
      break;
    case '/Standings':
      Component = Standings;
      break;
    case '/Teams':
      Component = Teams;
      break;
    case '/signin': 
      Component = SignIn;
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
