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

const projectData = [
  {
    title: 'Adventure Science Center VR',
    description: 'Nashville’s first, large-scale, public, virtual reality installation with custom-designed experiences.',
    image: '/react-mpd/images/adventure-science-center.jpg'
  },
  {
    title: 'Franke VR Tradeshow Booth',
    description: 'Inside the headset, trade show attendees were met by Franke’s virtual trade show guide.',
    image: '/react-mpd/images/franke-vr.jpg'
  },
  {
    title: 'Boo Bunny Plague',
    description: 'A comedy action adventure musical game taking place across multiple dimensions.',
    image: '/react-mpd/images/boo-bunny-plague.jpg'
  },
  {
    title: 'Aimlabs',
    description: 'Aim trainer offering personalized tasks, real-time analytics, and game-specific tools to elevate your gameplay.',
    image: '/react-mpd/images/aimlabs.jpg'
  },
  {
    title: 'Aegis Descent',
    description: 'Aegis Descent is a fast-paced action game set at the end of WW2.',
    image: '/react-mpd/images/aegis-descent.jpg'
  },
  {
    title: 'Walmart Universe of Play',
    description: 'The ultimate virtual toy destination in Roblox.',
    image: '/react-mpd/images/walmart-universe.jpg'
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
              <MDBCardImage src={project.image} position='top' alt={project.title} />
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
              <p>{activeProject?.description}</p>
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
