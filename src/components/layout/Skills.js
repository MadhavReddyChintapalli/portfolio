import React from 'react';

function Skills() {
  return (
    <div className='container-fluid' id='skills'>
      <h2>Skills</h2>
      <br />
      <div className='row'>
        <div className='col-lg-3 col-md-2'>
          <h4>Front End Technologies</h4>
          <br />
          <p>HTML 5</p>
          <p>CSS 3</p>
          <p>BootStrap</p>
          <p>JQuery</p>
          <p>React.js</p>
          <p>Angular</p>
        </div>
        <div className='col-lg-3 col-md-2'>
          <h4>Programming Languages</h4>
          <br />
          <p>C</p>
          <p>C++</p>
          <p>Java</p>
          <p>C#</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
        </div>
        <div className='col-lg-3 col-md-2'>
          <h4>Back End Technologies</h4>
          <br />
          <p>Node.js</p>
          <p>Express.js</p>
          <p>ASP.NET Core Web API</p>
        </div>
        <div className='col-lg-3 col-md-2'>
          <h4>Database Technologies</h4>
          <br />
          <p>MongoDB</p>
          <p>MySQL</p>
          <p>SQL Server</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
