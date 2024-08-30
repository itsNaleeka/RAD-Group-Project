import React, { useState } from 'react'
import './Add.css'
import {assets} from '../../assets/assets'

const Add = () => {

  const [image,setImage] = useState(false);
  const [data,setData] = useState({
    name:"",
    descriptoin:"",
    price:"",
    category:"Salad",

  })

  const onChangeHandler = (event)=>{
    const name=event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }
  return (
    <div className='add'>
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Uplaod Image</p>
          <label htmlFor='image' className='label-image'>
            <img src={image?URL.createObjectURL(image):assets.upload_area}/>
          </label>
          <input onChange = {(e)=>setImage(e.target.files[0])}type="file" id='image' hidden required/>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type='text' name='name' placeholder='type here'/>
         </div>
         <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea name='description' rows='6' placeholder='Write Content Here'></textarea>
         </div>
         <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select name='category'>
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
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input type="Number" name='price' placeholder='$20'/>
          </div>
         </div>
         <button type='submit' className='add-button'>Add</button>

      </form>
      
    </div>
  )
}

export default Add
