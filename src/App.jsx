import './App.css'
import SignIn from './pages/SignIn';
import Tournaments from './pages/Tournaments';
import Home from './pages/Home';
import NavBar from './pages/NavBar'

function App() {

  let Component;
  switch(window.location.pathname) {
    case '/Home':
      Component = Home;
      break;
    case '/Tournaments':
      Component = Tournaments;
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
