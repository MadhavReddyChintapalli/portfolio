import React from 'react';

function Contact() {
  return (
    <div className='footer-container-fluid colored-section' id='contact'>
      <h2>Contact</h2> <br />
      <div className='row'>
        <div className='col-lg-6'>
          <h4>Email</h4>
          <i class='bi bi-envelope'></i>
          <br />
          <p>chintapallimadhav@gmail.com</p>
          <h4>Phone</h4>
          <i class='bi bi-telephone'></i>
          <br />
          <p>+1 6475458423</p>
          <h4>Address</h4>
          <i class='bi bi-geo-alt'></i>
          <p>12 Lynmont Road, Etobicoke, ON M9V 3W8</p>
        </div>
        <div className='col-lg-6'>
          <h4>Linkedin</h4>
          <i class='bi bi-linkedin'></i>
          <p>linkedin.com/in/madhavreddychintapalli/</p>
          <h4>Github</h4>
          <i class='bi bi-github'></i>
          <p>github.com/MadhavReddyChintapalli</p>
          <h4>Portfolio</h4>
          <i class='bi bi-briefcase'></i>
          <p>https://fast-plateau-72751.herokuapp.com/</p>
        </div>
      </div>
      <br />
      <p className='footer-text'>
        @Designed & Developed by Madhav Reddy Chintapalli
      </p>
    </div>
  );
}

export default Contact;
