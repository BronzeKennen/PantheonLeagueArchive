import "../styles/Home.css"
import { motion } from 'framer-motion'
import { createClient } from "@supabase/supabase-js"
const supabase = createClient('https://cwxskbsjnovkyqeloumw.supabase.co', import.meta.env.VITE_SUPABASE_API_KEY)


let { data: logos, error } = await supabase
  .from('teams')
  .select('logo')
const path = window.location.pathname;

export default function Home() {
  return (
    <>
      <div className="home"/>
      <div className="home-container">
        <motion.h1 className="header"
        animate={{
          opacity: 1,
        }}
        transition={{duration:.75}}
        >Pantheon League Archive
        </motion.h1>
        <div className="rllogo">
          <div className="glow"></div>
        </div>
        <span className="subheader">
          <span className="logos">
            {logos.map((logo) => {
              return(<img src={logo.logo} className="header-logos"></img>)
            })}
          </span>
        </span>
        <motion.h6
        animate={{
          opacity: 1
        }}
        transition={{opacity: {duration:1, delay:1.25}}}
        id="h6lmao"
        >All info regarding the Pantheon League season and its playoffs</motion.h6>
      </div>
      <ul className="menu">
        <li><a href="./Standings" className={path === '/Standings' ? 'active rest' : 'rest'}>Standings</a></li>
        <li><a href="./Players" className={path === '/Players' ? 'active rest' : 'rest'}>Players</a></li>
        <li><a href="./Playoffs" className={path === '/Playoffs' ? 'active rest' : 'rest'}>Playoffs</a></li>
        <li><a href="./Matches" className={path === '/Matches' ? 'active rest' : 'rest'}>Matches</a></li>
      </ul>
    </>
  )
}