import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div className="main-footer">
      <div className='containee'>
        <div className="row">
           <div className='col'>
            <h2>Foody</h2>           </div>
           <div className='col'>
                <p>Delivery Service</p>
           </div>
           <div className='col'>
                 <p>Reservation</p>
           </div>
        </div>
        <hr/>
        <div className="row"><p>Contact us : 07xxxxxxxx</p>
        <p>Email : foody@gmail.com</p>
        </div>
        
      </div>
    </div>
  )
}


