import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter
} from 'mdb-react-ui-kit';

const basePath = import.meta.env.DEV ? '/images/' : '/react-mpd/images/';

const projectData = [
  {
    title: 'Adventure Science Center VR',
    description: 'Nashville’s first, large-scale, public, virtual reality installation with custom-designed experiences.',
    details: 'Developed with Unity3D and C#, this VR installation featured interactive educational simulations designed for public engagement at Nashville’s Adventure Science Center.',
    image: `${basePath}adventure-science-center.jpg`,
    stack: 'Unity3d, C#, HTC Vive, SteamVR',
    link: '#'
  },
  {
    title: 'Franke VR Tradeshow Booth',
    description: 'Inside the headset, trade show attendees were met by Franke’s virtual trade show guide.',
    details: 'Franke’s VR tradeshow booth was designed to engage attendees with an immersive experience that showcased their products and services in a virtual environment.',
    image: `${basePath}franke-vr.jpg`,
    stack: 'Unity3d, C#, HTC Vive, SteamVR',
    link: '#'
  },
  {
    title: 'Boo Bunny Plague',
    description: 'A comedy action adventure musical game taking place across multiple dimensions.',
    details: 'Join Bunny and his pals Gunny, Faye, and Ganny on an epic quest to earn enough money to buy himself an Auto-repair unit! Bunny is a robotic children’s toy who was given artificial life by a computer virus. After meeting his BFF, a military prototype robot named Gunny, he quickly discovers that being a toy means he’s not quite as tough as his deranged mind has lead him to believe, and he certainly doesn’t have a military grade auto-repair like Gunny does.',
    image: `${basePath}boo-bunny-plague.jpg`,
    stack: 'Unity3d, C#',
    link: '#'
  },
  {
    title: 'Aimlabs',
    description: 'Aim trainer offering personalized tasks, real-time analytics, and game-specific tools to elevate your gameplay.',
    details: 'Aim Lab is a free, science-backed aim training platform available on Steam, designed to improve players’ aiming skills in first-person and third-person shooter (FPS/TPS) games. It offers a wide range of customizable training scenarios, personalized analytics, and features to help players identify and address their weaknesses.',
    image: `${basePath}aimlabs.jpg`,
    stack: 'Unity3d, C#',
    link: '#'
  },
  {
    title: 'Aegis Descent',
    description: 'Aegis Descent is a fast-paced action game set at the end of WW2.',
    details: 'Aegis Descent is a fast-paced, action-packed, roguelite vehicle shooter set in an alternate 1940s World War II, where players pilot the experimental Aegis hover tank. The game features intense combat against hostile bugs within a secret testing facility, blending vehicle combat with roguelite elements like procedurally generated maps and permadeath.',
    image: `${basePath}aegis-descent.jpg`,
    stack: 'Unreal Engine, C++',
    link: '#'
  },
  {
    title: 'Walmart Universe of Play',
    description: 'The ultimate virtual toy destination in Roblox.',
    details: 'Walmart’s Universe of Play was a virtual experience on Roblox, designed to engage younger users by bringing popular toy brands to life in a metaverse setting. It featured immersive games, virtual toys, and challenges based on brands like L.O.L. Surprise!, Jurassic World, Paw Patrol, and Magic Mixies.',
    image: `${basePath}walmart-universe.jpg`,
    stack: 'Roblox, Lua',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Yes! This very website you are currently viewing.',
    details: 'In an effort to showcase my work and skills, I built this portfolio website using React, TypeScript, and MDBootstrap. It serves as a platform to highlight my projects, experiences, and technical expertise.',
    image: `${basePath}portfoliopage.jpg`,
    stack: 'TypeScript, React, MDBootstrap',
    link: '#'
  },
];

const Projects: React.FC = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [activeProject, setActiveProject] = useState<typeof projectData[0] | null>(null);

  const toggleShow = (project: typeof projectData[0]) => {
    setActiveProject(project);
    setBasicModal(!basicModal);
  };

  return (
    <MDBContainer className='my-5'>
      <h2 className='mb-4'>Featured Projects</h2>
      <p className='mb-5'>
        Here’s a selection of immersive and full-stack projects I've contributed to — from AR/VR installations to commercial games and interactive tools.
        Many of these projects were built using Unity3D, C#, and a combination of modern web and graphics pipelines.
      </p>

      <div className='row gy-4'>
        {projectData.map((project, idx) => (
          <div className='col-md-6 col-lg-4' key={idx}>
            <MDBCard>
              <MDBCardImage src={project.image} position='top' alt={project.title} style={{
                objectFit: 'cover',
                height: '200px',
                width: '100%',
                maxHeight: '200px'
              }} />
              <MDBCardBody>
                <MDBCardTitle>{project.title}</MDBCardTitle>
                <MDBCardText>{project.description}</MDBCardText>
                <MDBBtn onClick={() => toggleShow(project)}>View</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>

      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{activeProject?.title}</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => setBasicModal(false)}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <img
                src={activeProject?.image}
                alt={activeProject?.title}
                className='img-fluid mb-3'
              />
              <p><strong>Project Overview:</strong> {activeProject?.details}</p>
              {activeProject?.stack && (
                <p><strong>Technologies:</strong> {activeProject.stack}</p>
              )}
              {/* Add more details or links here if needed */}
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={() => setBasicModal(false)}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </MDBContainer>
  );
};

export default Projects;
