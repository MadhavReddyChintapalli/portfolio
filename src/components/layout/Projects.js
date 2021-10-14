import React from 'react';

function Projects() {
  return (
    <div className='container-fluid colored-section' id='projects'>
      <h2>Projects</h2>
      <br />
      <div className='row'>
        <div className='col-lg-6'>
          <h4>URVITVOICE</h4>
          <p>
            A web application helping consumers with inquiries and file
            complaints against providers with a step-by-step process. Consumers
            can be customers and providers can be any type of financial
            institution, company, agency, or agent. This will bring consumers
            and providers together to communicate, raise and resolve complaints.
          </p>
        </div>
        <div className='col-lg-6'>
          <h4>Pet Care</h4>
          <p>
            A web application that helps in creating a pet care community where
            we can sell pets and their services.
          </p>
        </div>
        <div className='col-lg-6'>
          <h4>Keeper</h4>
          <p>
            A web application that helps in taking note of ideas and adding it
            to your app. Keeper makes it easy to capture a thought or list for
            yourself.
          </p>
        </div>
        <div className='col-lg-6'>
          <h4>Dev Connector</h4>
          <p>
            A web application that helps in creating a developer
            profile/portfolio, share posts and get help from other developers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
