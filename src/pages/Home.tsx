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
    {/* Tech icons row */}
    <div className='d-flex justify-content-center align-items-center flex-wrap mt-4 gap-4'>
      <i className='devicon-react-original colored' title='React' style={{ fontSize: '2rem' }}></i>
      <i className='devicon-typescript-plain colored' title='TypeScript' style={{ fontSize: '2rem' }}></i>
      <i className='devicon-nodejs-plain colored' title='Node.js' style={{ fontSize: '2rem' }}></i>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/1/19/Unity_Technologies_logo.svg'
        alt='Unity'
        title='Unity'
        style={{ height: '32px', filter: 'invert(0.8)' }}
      />
      <i className='devicon-csharp-plain colored' title='C#' style={{ fontSize: '2rem' }}></i>
      <i className='devicon-github-original' title='GitHub' style={{ fontSize: '2rem' }}></i>
    </div>
    <Link to='/projects'>
      <button className='btn btn-primary'>
        View Projects
      </button>
    </Link>
  </MDBContainer>
);

export default Home;