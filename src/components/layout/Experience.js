import React from 'react';

function Experience() {
  return (
    <div className='container-fluid colored-section' id='experience'>
      <h2>Experience</h2>
      <br />
      <h4>Full Stack Web Developer</h4>
      <span>Witlinks Corporation, Brampton, CA</span>
      <br />
      <span>Sep 2020 - Aug 2021</span>
      <br /> <br />
      <ul>
        <li>Developed the Front end by using React JS, Angular.</li>
        <li>
          Created React Components using JSX, used React-Router for routing,
          Axios for data fetching, Redux for state management, React Developer
          Tools for debugging.
        </li>
        <li>Performing end-to-end testing on React applications using JEST.</li>
        <li>
          Generating Code Coverage Reports for unit tests on web applications.
        </li>
        <li>
          Worked on the Back end by using Node JS with Express and MongoDB.
        </li>
        <li>
          Created Restful APIs using Node.js with Express.js, and used Postman
          for testing APIs.
        </li>
        <li>Deployed Web applications on Heroku, Amazon AWS.</li>
        <li>
          Used JIRA for project management and tracking issues, Git for version
          control.
        </li>
      </ul>
      <br />
      <h4>Web Developer</h4>
      <span>Chistle IT Solutions Pvt Ltd, Hyderabad, India</span>
      <br />
      <span>May 2018 - May 2019</span>
      <br /> <br />
      <ul>
        <li>Developed Single Page Applications by using Angular.</li>
        <li>
          {' '}
          Created Angular Components and Services using Angular CLI, followed
          MVC Framework
        </li>
        <li>Used TypeScript for writing web applications.</li>
        <li>
          Performing Unit testing on components, services, pipes, and directives
          using Karma and Jasmine.
        </li>
        <li>
          Performing End-to-End testing on Angular applications using Protractor
          and Cucumber.
        </li>
        <li>Worked on the Back end by using ASP.NET Core Web API.</li>
        <li>
          Experience in working with SQL databases like Oracle, MySQL, SQL
          Server, and NoSQL databases like MongoDB.
        </li>
        <li>Created Wireframes and implemented UI Mockups.</li>
        <li>Deployed Web applications on Heroku and Microsoft Azure DevOps.</li>
      </ul>
    </div>
  );
}

export default Experience;
