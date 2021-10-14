import React from 'react';

function Contact() {
  return (
    <div className='footer-container-fluid colored-section' id='contact'>
      <h2>Contact</h2> <br />
      <div className='row'>
        <div className='col-lg-3'>
          <h4>Email</h4>
          <p>chintapallimadhav@gmail.com</p>
        </div>
        <div className='col-lg-3'>
          <h4>Phone</h4>
          <p>+1 6475458423</p>
        </div>
        <div className='col-lg-3'>
          <h4>Address</h4>
          <p>12 Lynmont Road, Etobicoke, ON M9V 3W8</p>
        </div>
        <div className='col-lg-3'>
          <h4>Linkedin</h4>
          <p>linkedin.com/in/madhavreddychintapalli/</p>
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
