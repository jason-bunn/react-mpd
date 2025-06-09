import React from 'react';
import { MDBContainer } from 'mdb-react-ui-kit';

const About: React.FC = () => (
    <MDBContainer className="my-5">
        <h2 className='display-4'>About Me</h2>
        <p className='lead'>
            I'm a software engineer with over a decade of experience building interactive digital experiences — from immersive AR/VR simulations to modern full-stack web applications. My background began in Unity3D and C#, where I led the development of several real-time training, healthcare, and educational apps.
        </p>
        <p>
            In recent years, I've expanded my toolkit to include React, TypeScript, Node.js, and modern front-end libraries like Vite and TailwindCSS. I'm passionate about creating intuitive UIs, scalable architectures, and user-centered design.
        </p>

        <p>
            Whether building 3D experiences or full-stack platforms, I bring a detail-oriented mindset, strong communication skills, and a deep commitment to continuous learning and clean code. I’m currently focusing on transitioning from the games industry into more traditional SaaS and enterprise development work.
        </p>

        <p>
            Tech stack highlights include: <strong>Unity3D, C#, React, TypeScript, Node.js, Express, PostgreSQL, MongoDB, GitHub Actions</strong>, and more.
        </p>
    </MDBContainer>
);

export default About;
