import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={LogoS} alt="developer" />
          inston
          <br />
          Software Engineer
        </h1>
        <h2>
            Student at Syracuse University / Azure Certified / Software Engineer
        </h2>
        <Link to ="/contact" className = 'flat-button'>Contact Me</Link>
      </div>
    </div>
  )
}
export default Home
