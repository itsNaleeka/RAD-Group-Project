import React from 'react';
import deliver from '../assests/deliver.png';
import customer from '../assests/customer.png';
import order from '../assests/orders.png';
import rider from '../assests/riders.png';
import './Home.css';

function Home() {
  return (
    <div className='content'>
      <h4>Welcome to the Foody Rider Management Platform</h4>
      <h3>Explore Our Services</h3>
      <div className='servicepic'>
        <div className='servicepic1'>
          <img src={deliver} alt="Delivery Management" />
          <p>Manage and track all deliveries efficiently</p>
        </div> 
        <div className='servicepic1'>
          <img src={customer} alt="Customer Management" />
          <p>Keep track of customer details and orders</p>
        </div>
        <div className='servicepic1'>
          <img src={order} alt="Order Management" />
          <p>Oversee and update all pending orders</p>
        </div>
        <div className='servicepic1'>
          <img src={rider} alt="Rider Management" />
          <p>Manage riders with ease - add, edit, or remove</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
