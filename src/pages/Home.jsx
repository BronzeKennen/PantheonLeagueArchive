import "../styles/Home.css"
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <div className="home"/>
      <div className="container">
        <motion.h1 className="header"
        animate={{
          opacity: 1,
          y:260
        }}
        transition={{duration:1}}
        >All Greek Rocket League Tournaments in one place</motion.h1>
        <span>
        <motion.button className="header-button" id="get-started-button"
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 1px 1px orange'
        }}
        animate={{
          opacity: 1
        }}
        transition={{opacity: {duration:1, delay:1}}}
        >Get started</motion.button>
        <motion.button className="header-button" id="available-tournaments"
        whileHover={{
          scale: 1.05,
          boxShadow: '1px 1px 3px 3px purple'
        }}
        animate={{
          opacity: 1
        }}
        transition={{opacity: {duration:1, delay:1}}}
        >Available tournaments</motion.button>
        </span>
      </div>
    </>
  )
}