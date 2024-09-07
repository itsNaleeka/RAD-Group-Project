import React, { useState } from 'react'
import './Popup.css'

const Popup = ({setUpdateSection}) => {

    const handlerSubmit =(e)=>{
        e.preventDefault();
    }

    const handleUpdateClick = ()=>{
        setUpdateSection(false);
        
    };
  return (
    
    <div className='popup-container'>

    <from className="popup-from" onSubmit={handlerSubmit}>
        <div className="row-item">
        <label htmlFor="name">Product Name</label>
        <input type='text' name='name'  id='name'/>
        </div>
        <div className="row-item">
        <label htmlFor="description">Product Description</label>
        <textarea name='description' rows='6' placeholder='Write Content Here' id="description" required></textarea>
        </div>
        <div className="row-item">
        <label htmlFor="price">Product Price</label>
        <input type='Number' name="price" id="price"/>
        </div>
        
        
        <div className="category">
            <p>Category</p>
            <select name="category">
                <option value='Salad'>Salad</option>
                <option value='Rolls'>Rolls</option>
                <option value='Deserts'>Deserts</option>
                <option value='Sandwich'>Sandwich</option>
                <option value='Cake'>Cake</option>
                <option value='Pure Veg'>Pure Veg</option>
                <option value='Pasta'>Pasta</option>
                <option value='Noodles'>Noodles</option>
            </select>
        </div>
        <button onClick={handleUpdateClick} type='submit' className='update-btn'>Update</button>
    </from>
  
</div>
  )
}

export default Popup
