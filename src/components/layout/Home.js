import React from 'react';

function Home() {
  return (
    <div className='home-container-fluid uncolored-section' id='home'>
      <div className='row'>
        <div className='col-lg-6 title-text'>
          <h1>I'm Madhav Reddy Chintapalli.</h1>
          <br />
          <p className='heading-text'>
            I'm a Full Stack Web Developer. I specialize in designing,
            developing, testing and deploying web applications. I have 2 years
            of experience as a Full Stack Developer in Web Application
            Development using React and Angular.
          </p>
        </div>
        <div className='col-lg-6'>
          <img
            className='title-image'
            src='images/titleimage.png'
            alt='iphone-mockup'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
