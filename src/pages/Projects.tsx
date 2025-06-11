import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

const Projects: React.FC = () => (
  <MDBContainer className='my-5'>
    <h2>Projects - Coming Soon</h2>
    <div className='row'>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Adventure Science Center VR</h5>
            <p className='card-text'>Short description of the project.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Franke VR Tradeshow booth</h5>
            <p className='card-text'>Another cool project description.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Virtufab Prototype Visualizer</h5>
            <p className='card-text'>Another cool project description.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Aimlabs</h5>
            <p className='card-text'>Another cool project description.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Aegis Descent</h5>
            <p className='card-text'>Another cool project description.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Walmart Universe of Play</h5>
            <p className='card-text'>Another cool project description.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
    </div>
  </MDBContainer>
);

export default Projects;