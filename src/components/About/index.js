import './index.scss';
import concentrationImage from '../../assets/images/Concentration.jpg';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Loader from 'react-loaders';

const About = () => {
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
            I'm Winston Tsui, from Queens, New York City! I am a senior
            at Syracuse University studying Computer Science. My academic
            journey in Computer Science has equipped me with a strong technical
            foundation and is marked with top grades across the board. My brief
            research optimizing electrical power grid models with Professor
            Fioretto instilled professional focus and collaboration skills. I
            have a leading industry certification in Azure AI Engineering.
            Additionally, my internship at Palapa, an AI startup, challenged my
            software development and machine learning knowledge. This
            realization propelled my aspiration for continuous learning and
            professional growth.
          </p>
          <p>
            I am drawn to innovation; placing emphasis on leadership and
            communication as I seek to work in a company that promotes
            full-stack software engineering integrated with machine learning
            predictive analytics.
          </p>
          <p>
            I am seeking an opportunity to apply the theoretical knowledge and
            practical skills I've acquired during my academic journey in a
            real-world, professional setting. I am eager to contribute to your
            dynamic team, collaborating on challenging projects, and continuing
            my learning journey in a supportive environment. I want to make a
            meaningful impact by contributing to your company's success while
            continuously evolving as a professional in the field.
          </p>
        </div>
        <img
          className="winstonimage"
          src={concentrationImage}
          alt="Exampleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
        />
      </div>
      <Loader type="pacman" />
    </>
  );
};
export default About;
