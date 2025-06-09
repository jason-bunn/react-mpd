import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Home: React.FC = () => (
  <MDBContainer className="text-center mt-5">
    <h4 className='display-4'>Welcome to the Home Page</h4>
    <p className='lead'>This is a simple home page for our application.</p>
    <Link to='/projects'>
    <button className='btn btn-primary'>
      View Projects
    </button>
    </Link>
  </MDBContainer>
);

export default Home;