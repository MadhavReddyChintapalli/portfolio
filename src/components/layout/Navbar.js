import React from 'react';

function Navbar() {
  return (
    <div>
      <nav class='navbar navbar-expand-lg navbar-dark bg-dark fixed-top'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarTogglerDemo01'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <a className='navbar-brand' href='#'>
          Madhav
        </a>
        <div
          className='collapse navbar-collapse navbar-right'
          id='navbarTogglerDemo01'
        >
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#experience'>
                Experience
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#education'>
                Education
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#projects'>
                Projects
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
