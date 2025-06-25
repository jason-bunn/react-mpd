import React from 'react';
import {
  MDBFooter,
  MDBIcon,
} from 'mdb-react-ui-kit';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';


const App: React.FC = () => {
  return (
    <Router>
      <div className='d-flex'>
        <div className='bg-light p-4 vh-100' style={{ width: '250px' }}>
          <h4 className='mb-4'>Jason Bunn</h4>
          <nav className='d-flex flex-column'>
            <Link to='/' className='mb-2'>Home</Link>
            <Link to='/about' className='mb-2'>About</Link>
            <Link to='/projects' className='mb-2'>Projects</Link>
            <Link to='/contact' className='mb-2'>Contact</Link>
          </nav>
        </div>

        <div className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

          <MDBFooter className='bg-light text-center py-3 mt-auto'>
            <div className='mb-2'>
              <a href='https://github.com/jason-bunn' target='_blank' rel='noopener noreferrer' className='me-3 text-dark'>
                <MDBIcon fab icon='github' className='me-3' />
              </a>
              <a href='https://linkedin.com/in/jasonbunn' target='_blank' rel='noopener noreferrer' className='me-3 text-dark'>
                <MDBIcon fab icon='linkedin' />
              </a>
            </div>
            <small>&copy; {new Date().getFullYear()} Jason Bunn</small>
          </MDBFooter>
        </div>
      </div>
    </Router>
  );
};

export default App;
