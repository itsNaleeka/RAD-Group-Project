import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Popup.css'
import { toast } from 'react-toastify'


const Popup = ({setUpdateSection, selectedFood, fetchList}) => {

    const url ="http://localhost:4000";
    //handling the data updateing
    const [data,setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salad",
});
    //refill data at the begining at once
    useEffect(()=>{
        if(selectedFood){
            setData({
                name:selectedFood.name || "",
                description:selectedFood.description || "",
                price:selectedFood.price || "",
                category:selectedFood.category || "Salad",
            });
        }
    },[selectedFood])

    const onChangeHandle = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

//hadnling the popup effect
    const handlerSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        
        const response  = await axios.put(`${url}/api/food/update`,{
            id:selectedFood._id,
            name:data.name,
            description:data.description,
            price:Number(data.price),
            category:data.category,
        });

        if(response.data.success){
            toast.message(response.data.message);
            fetchList(); //refresh the list adter update
        }
        else{
            toast.error(response.data.message)
        }
    }

    const handleUpdateClick = ()=>{
        setUpdateSection(false);
        
    };
  return (
    
    <div className='popup-container'>

    <form className="popup-form" onSubmit={handlerSubmit}>
        <div className="row-item">
        <label htmlFor="name">Product Name</label>
        <input onChange={onChangeHandle} value={data.name} type='text' name='name'  id='name'/>
        </div>
        <div className="row-item">
        <label htmlFor="description">Product Description</label>
        <textarea onChange={onChangeHandle} value={data.description} name='description' rows='6' placeholder='Write Content Here' id="description" required></textarea>
        </div>
        <div className="row-item">
        <label htmlFor="price">Product Price</label>
        <input onChange={onChangeHandle} value={data.price} type='Number' name="price" id="price"/>
        </div>
        
        
        <div className="category">
            <p>Category</p>
            <select onChange={onChangeHandle} name="category" value={data.category}>
                <option value='Salad'>Salad</option>
                <option value='Chicked'>Chicken</option>
                <option value='Deserts'>Deserts</option>
                <option value='Sandwich'>Sandwich</option>
                <option value='Cake'>Cake</option>
                <option value='Pure Veg'>Pure Veg</option>
                <option value='Pasta'>Pasta</option>
                <option value='Noodles'>Noodles</option>
            </select>
        </div>
        <div className="buttons">
        <button type='submit' className='update-btn'>Update</button>
        <button onClick={handleUpdateClick}  className='cancel-btn'>Cancel</button>
        </div>
        
    </form>
  
</div>
  )
}

export default Popup
