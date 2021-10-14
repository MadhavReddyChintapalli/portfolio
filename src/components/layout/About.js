import React from 'react';

function About() {
  return (
    <div className='container-fluid colored-section' id='about'>
      <div className='row'>
        <div className='col-lg-6'>
          <br />
          <br />
          <br />
          <img
            className='about-image'
            src='images/madhav.png'
            alt='iphone-mockup'
          />
        </div>
        <div className='col-lg-6 about-text'>
          <br />
          <h2>About Me</h2>
          <br />
          <p>
            Hi. Good Morning! My name is Madhav. I’m from India. I currently
            live in Toronto. I completed my bachelor's in Electronics and Post
            Graduation Diploma in Information Technology Solutions. I started my
            career as a web developer at Chistle IT Solutions, then worked as a
            full stack developer at Witlinks Corporation. I specialize in
            designing, developing, testing, and deploying web applications from
            the front end using technologies like React, Angular to the back end
            using technologies like Node, Express, and MongoDB, and ASP.NET
            Core. Right now, I’m looking for an opportunity to work at an
            innovative software company.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
