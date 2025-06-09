import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <MDBContainer className="text-center mt-5">
    <h4 className='display-4'>Hi, I'm Jason Bunn</h4>
    <p className='lead'>Unity Developer & Full Stack Engineer</p>
    <p className='mt-4 px-3 mx-auto' style={{ maxWidth: '700px' }}>
      Welcome to my portfolio site. Here you'll find a curated selection of my work in both Unity development and full stack web applications.
      I specialize in creating immersive AR/VR experiences as well as building scalable frontend and backend solutions using React, TypeScript, and modern web technologies.
    </p>
    <Link to='/projects'>
      <button className='btn btn-primary'>
        View Projects
      </button>
    </Link>
  </MDBContainer>
);

export default Home;