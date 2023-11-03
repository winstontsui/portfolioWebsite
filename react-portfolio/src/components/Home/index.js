import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 'n', 's', 't', 'o', 'n', '!']
  const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hello, <br /> I'm
          <img src={LogoS} alt="developer" />
          <AnimatedLetters letterClass = {letterClass}
          strArray = {nameArray}
          idx = {15}/>
          <br />
          Software Engineer
        </h1>
        <h2>
            Student at Syracuse University / Computer Science / Software Engineer
        </h2>
        <Link to ="/contact" className = 'flat-button'>Contact Me Here</Link>
      </div>
    </div>
  )
}
export default Home
