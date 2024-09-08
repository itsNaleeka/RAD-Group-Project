import React, { useState } from 'react';  // Import useState from React
import axios from 'axios';  // Import axios for making HTTP requests
import './Contact.css';

const Contact = () => {


  return (
    <div className="cont">
      <div className='contant'>
        <div className='contact'>Contact Us</div>
        <h3>For Any Further Questions.</h3>
        <div className='detail'>
          <div className="detail-drop">
            <h3>Make Money With Us</h3>
            <p>
              Affiliate programs are common throughout the Internet and offer website owners an additional
              way to spread the word about their websites. Among others, our program is free to join,
              easy to sign up and requires no technical knowledge! As our affiliates,
              you will generate traffic and sales for our website and receive attractive commissions in return.
            </p>
          </div>
          <div className="detail-drop">
            <div className="drop">Drop your query!</div>
            <div className="form">
              <input
                type='text'
                placeholder='Enter your problem'/>
              <button className="submit" type="submit" >Submit</button>

              <h2>Email :</h2>
              <p>driver@gmail.com</p>
              <h2>Phone Number :</h2>
              <p>0876543</p>
              <h2>Website Link :</h2>
              <p>wertyiokjb.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
