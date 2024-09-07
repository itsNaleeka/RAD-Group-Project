import React, { useEffect, useState } from 'react';
import './List.css'
import axios from "axios"
import { toast } from 'react-toastify';
import Popup from '../../components/Popup/Popup';

const List = () => {

  const url = "http://localhost:4000";
  const [list,setList] = useState([]);

  const fetchList = async() => {
    const response = await axios.get(`${url}/api/food/list`)  //geting data 
  
    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }

  //removing food item form the list
  const removeFood = async(foodId) =>{
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId}); //calling API
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }
    else{
      toast.error("Error")
    }
  }

    useEffect(()=>{
      fetchList();
    },[])

    //animation use effect
    useEffect(() => {
      const rows = document.querySelectorAll("list-table-title");
      rows.forEach((row, index) => {
        row.style.animationDelay = `${index * 0.5}s`;
      });
    }, []);


    //popup box

    const [updateSection,setUpdateSection] = useState(false);

    
 
  return (
    <>
    
    <div className='list add flex-col'>
      {
        updateSection && (
          <>
            <div className="popup-overlay" onClick={()=>setUpdateSection(false)}></div>
            <div className="popup-class">
            
            <Popup setUpdateSection= {setUpdateSection}/>
          </div>
          </>
        )
      }
    
      <p className='topic'>All Food Items</p>
      <div className="list-table">
        <div className="list-table-title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+item.image} alt />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <div className="actions">
              <p onClick={()=>setUpdateSection(true)}>Update</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>Remove</p>
              </div>
             
            
            </div>
          )
        })}
      </div>
     
        
     
      
    </div>

    </>
  )
}

export default List


/*import React from 'react'
import "./EditPopup.css"

const editPopup = () => {
  return (
    <div className='popup-container'>
        <from className="popup-from">
            <label htmlFor="name">Product Name</label>
            <input type='text' name='name' value='' id='name'/>
            <label htmlFor="description">Product Description</label>
            <textarea name='description' rows='6' placeholder='Write Content Here' id="description" required></textarea>
            <label htmlFor="price">Product Price</label>
            <input type='Number' name="price" id="price"/>
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
            <button type='submit' className='update-btn'>Update</button>
        </from>
      
    </div>
  )
}

export default editPopup
*/