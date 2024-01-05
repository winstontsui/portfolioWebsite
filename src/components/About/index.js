import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import Loader from 'react-loaders';
import gsap from 'gsap';

const About = () => {
  gsap.registerPlugin(DrawSVGPlugin);

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello! I'm Winston Tsui, from Queens, New York City! I currently
            attend Syracuse University, in my last year, studying Computer
            Science! Previously, I have interned at NYC Department of
            Correction, NYC Department of Design and Construction, and Palapa. I
            have also gained incredible interpersonal and communication skills
            while working at Mount Sinai Hospital. I'm in the process of joining
            Tau Beta Pi honor society now and am looking to apply to further my
            knowledge, experience and passion for software engineering.
          </p>
          <p>
            I am certified by Microsoft in Azure AI Engineering, so I am
            familiar with a large chunk of artificial intelligence services and
            resources from Microsoft. But I want to learn more about the actual
            underlying functions and frameworks that are behind these services
            in PyTorch and other frameworks, and I think this opportunity is a
            great way for me to learn more.
          </p>
          <p>
            Overall, I believe there is a bit of a learning curve for me, but I
            strongly believe I come equipped with the necessary and basic
            knowledge in programming and machine learning knowledge to make a
            meaningful impact. Previously, I have interned as a software
            engineering intern, an application developer intern as well as a
            desktop support intern. I also have created android application
            projects and would love to talk more about this. I would love to
            help and contribute in any way I can.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
