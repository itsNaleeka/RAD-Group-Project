import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"
const  List = () => {

  const url = "http://localhost:4000";

  const [list,setList] = useState([]);

  const fetchList = async()=>{
    const response = await axios.get(`${url}/api/food/list`) //api call

    if(response.data.success){
      setList(response.data.data)
    }
    else{
      toast.error("Error")
    }
  }
//removing food fucniton whne th action button is clicked
  const removeFood = async(foodID) => {
    //api call
    const resposne = await axios.post(`${url}/api/food/remove`,{id:foodID});
    await fetchList();
    if(resposne.data.success){
      toast.success(resposne.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

 useEffect(() => {
    const rows = document.querySelectorAll("list-table-format");
    rows.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  return (
    <div className = 'list add flex-col'>
      <p>All food List</p>
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
            <div  key={index} className="list-table-foramt" >
              <img src={`${url}/images/`+item.image} alt=""/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)}className='action'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
