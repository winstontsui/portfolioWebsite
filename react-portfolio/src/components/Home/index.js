import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['i', 'n', 's', 't', 'o', 'n', '!'];
  const jobArray = [
    'S',
    'o',
    'f',
    't',
    'w',
    'a',
    'r',
    'e',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ];

  useEffect(() => {
      setTimeout(() => {
       setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}> H</span>
          <span className={`${letterClass} _12`}> e </span>
          <span className={`${letterClass} _13`}> l </span>
          <span className={`${letterClass} _14`}> l </span>
          <span className={`${letterClass} _15`}> o,</span>
          <br />
          <span className={`${letterClass} _16`}> I</span>
          <span className={`${letterClass} _17`}> 'm</span>
          <img src={LogoS} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>
          Student at Syracuse University / Computer Science / Software Engineer
        </h2>
        <Link to="/contact" className="flat-button">
          Contact Me Here
        </Link>
      </div>
      <Logo />
    </div>
  );
};
export default Home;
