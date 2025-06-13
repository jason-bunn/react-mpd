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
            <p className='card-text'> Nashville’s first, large-scale, public, virtual reality installation with custom-designed experiences.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Franke VR Tradeshow booth</h5>
            <p className='card-text'>Inside the headset, trade show attendees were met by Franke’s virtual trade show
              guide.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Boo Bunny Plague</h5>
            <p className='card-text'>Boo Bunny Plague is a comedy action adventure musical game taking place across multiple dimensions and featuring a storyline with musical numbers.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Aimlabs</h5>
            <p className='card-text'>Aimlabs is the leading AI-powered aim trainer offering personalized tasks, real-time analytics, and game-specific tools to elevate your gameplay.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Aegis Descent</h5>
            <p className='card-text'>Aegis Descent is a fast-paced action game set at the end of WW2</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Walmart Universe of Play</h5>
            <p className='card-text'> The ultimate virtual toy destination in Roblox.</p>
            <a href='#' className='btn btn-primary'>View</a>
          </div>
        </div>
      </div>
    </div>
  </MDBContainer>
);

export default Projects;