import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faJs,
  faNodeJs,
  faGithub,
  faHtml5,
  faCss3Alt,
} from '@fortawesome/free-brands-svg-icons';
import { faCubes } from '@fortawesome/free-solid-svg-icons'; // For Unity placeholder

const Home: React.FC = () => (
  <MDBContainer className="text-center mt-5">
    <h4 className='display-4'>Hi, I'm Jason Bunn</h4>
    <p className='lead'>Unity Developer & Full Stack Engineer</p>
    <p className='mt-4 px-3 mx-auto' style={{ maxWidth: '700px' }}>
      Welcome to my portfolio site. Here you'll find a curated selection of my work in both Unity development and full stack web applications.
      I specialize in creating immersive AR/VR experiences as well as building scalable frontend and backend solutions using React, TypeScript, and modern web technologies.
    </p>
    {/* Tech icons row */}
    <div className='d-flex justify-content-center align-items-center flex-wrap mt-4 gap-4'>
      <FontAwesomeIcon icon={faReact} size='2x' title='React' />
      <FontAwesomeIcon icon={faJs} size='2x' title='JavaScript/TypeScript' />
      <FontAwesomeIcon icon={faNodeJs} size='2x' title='Node.js' />
      <FontAwesomeIcon icon={faHtml5} size='2x' title='HTML5' />
      <FontAwesomeIcon icon={faCss3Alt} size='2x' title='CSS3' />
      <FontAwesomeIcon icon={faGithub} size='2x' title='GitHub' />
      <FontAwesomeIcon icon={faCubes} size='2x' title='Unity (placeholder)' />
    </div>
    <Link to='/projects'>
      <button className='btn btn-primary'>
        View Projects
      </button>
    </Link>
  </MDBContainer>
);

export default Home;