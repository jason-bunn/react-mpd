import React, { useState } from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBTextArea,
  MDBBtn,
  MDBIcon,
} from 'mdb-react-ui-kit';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

 const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs.send(
      'service_d6esn3r',
      'template_clgmr4b',
      {
        from_name: name,
        from_email: email,
        message,
      },
      'kfsFOiIn7W_6M-MqW'
    )
    .then(() => {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((err) => {
      console.error('Email send error:', err);
      alert('An error occurred. Please try again.');
    });
  };

  return (
    <MDBContainer className='my-5' style={{ maxWidth: '600px' }}>
      <h2 className='mb-4'>Contact Me</h2>
      <p className='mb-4'>
        Feel free to reach out for freelance opportunities, project inquiries, or general questions.
      </p>
      {submitted && (
        <div className='alert alert-success mb-4 d-flex align-items-center' role='alert'>
          <MDBIcon icon='check-circle' className='me-2' />
          <span>Your message has been sent. Thank you!</span>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <MDBInput
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='mb-3'>
          <MDBInput
            type='email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='mb-3'>
          <MDBTextArea
            label='Message'
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>

        <MDBBtn type='submit'>Send</MDBBtn>
      </form>
    <div className='d-flex justify-content-center mt-4'>
      <a href='https://github.com/jason-bunn' target='_blank' rel='noopener noreferrer' className='me-3 text-dark'>
        <MDBIcon fab icon='github' size='2x' />
      </a>
      <a href='https://linkedin.com/in/jasonbunn' target='_blank' rel='noopener noreferrer' className='me-3 text-dark'>
        <MDBIcon fab icon='linkedin' size='2x' />
      </a>
      <a href='mailto:jason.bunn009@gmail.com' className='text-dark'>
        <MDBIcon icon='envelope' size='2x' />
      </a>
    </div>
  </MDBContainer>
);
}
export default Contact;