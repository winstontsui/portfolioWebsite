import './index.scss';
import LogoW from '../../assets/images/logo-w.jpg';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';

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
    }, 3000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _5`}> H </span>
            <span className={`${letterClass} _5`}> e </span>
            <span className={`${letterClass} _6`}> l </span>
            <span className={`${letterClass} _7`}> l </span>
            <span className={`${letterClass} _8`}> o,</span>
            <br />
            <span className={`${letterClass} _5`}> I</span>
            <span className={`${letterClass} _6`}> 'm</span>
            <img src={LogoW} className="w" alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={6}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>
            Student at Syracuse University / Computer Science / Software
            Engineer
          </h2>
          <Link to="/contact" className="flat-button">
            Contact Me Here
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default Home;
