import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

const Contact: React.FC = () => (
  <MDBContainer className='my-5'>
    <h2>Contact</h2>
    <form>
      <div className='mb-3'>
        <input type='text' className='form-control' placeholder='Name' />
      </div>
      <div className='mb-3'>
        <input type='email' className='form-control' placeholder='Email' />
      </div>
      <div className='mb-3'>
        <textarea className='form-control' rows={4} placeholder='Message'></textarea>
      </div>
      <button type='submit' className='btn btn-primary'>Send</button>
    </form>
  </MDBContainer>
);

export default Contact;