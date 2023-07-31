import "../styles/Home.css"

export default function Home() {
  function handleClick() {
    console.log(<h1>GAMW TO ANTITHEO SOU EXW KARTA</h1>)
  }
  return (
    <>
      <div className="home"/>
      <div className="container">
        <h1>All Greek Rocket League Tournaments in one place</h1>
        <button id="get-started-button" onClick={handleClick}>Get started</button>
        <button id="available-tournaments">Available tournaments</button>
      </div>
    </>
  )
}