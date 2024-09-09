import React from 'react'
import './hero.css'
import food from './assets/food.png'
export const Hero = () => {
  return (
    < div className = "contain">
        <div className = "description">
            <div className='role'><h1>Manager</h1></div>
            <div className= "paragraph"><p>The manager oversees daily operations and ensures smooth functioning of the daycare. Key responsibilities
                 include approving registrations, coordinating receptionist leave, managing employee records, and addressing 
                 any issues that arise. The manager also serves as the primary contact for parents, reviews and approves reports 
                 from doctors, and handles financial transactions. By maintaining accurate records and implementing strategic improvements,
                  the manager ensures a high standard of service and operational efficiency.</p></div>
        </div>
        <div className="image">
            <img src={food} alt="" className="food"/>
        </div>
      
    </div>
  )
}


