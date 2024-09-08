import React, { useEffect, useState } from 'react'
import './Orders.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import {assets} from '../../assets/assets'

const Orders =() => {
  const url = "http://localhost:4000";
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async ()=>{
    const response = await axios.get(url+"/api/order/list"); //API call
    if(response.data.success){
      //console.log(response.data.data)
      setOrders(response.data.data);
    }
    else{
      toast.error("Error");
    }
  }

  //remove completed orders
  const removeOrders = async(orderID) =>{
    const response = await axios.post(`${url}/api/order/remove`,{id:orderID});
    if (response.data.success) {
      setOrders(orders.filter((order) => order._id !== orderID));
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  }

  useEffect(()=>{
    fetchAllOrders();
  },[])
  
  return (
    <div className='order-add'>
      <h3 className='order-page'>Current Orders</h3>
      <div className="order-row">
      <div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt=""/>
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index === order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }

                })}
              </p>
              <p className='order-item-name'>{order.Address.firstName+" "+order.Address.lastName}</p>
              <div className="order-item-address">
                  <p>{order.Address.street+","}</p>
                  <p>{order.Address.city+", "+ order.Address.state+", "+order.Address.country+", "+order.Address.zipcode}</p>
                </div>
              </div>
              <p className='amounts'>Items : {order.items.length}</p>
              <p className='amounts'>${order.amount}</p>
              <select onChange={(e)=>{
                if(e.target.value === "Order Complete"){
                  removeOrders(order._id);
                }
              }}>
              <option value="Food-Processing">Food-Processing</option>
              <option value="Order Complete">Out for Delivery</option>
        
            
            </select>
            <div className="side-image">
              sdsd
            </div>
            
            </div>
        ))}
        
        </div>
        
        </div>
        
      
    </div>
  )
}

export default Orders

// --**** CAPITALIZE THE 'A' OF Address , 'S' of Status in the database, 

//{order.address.firstName+" "+order.address.lastName}
// {order.address.phone}


/*<div className="order-list">
        {orders.map((order,index)=>(
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt=""/>
            <div>
              <p className='order-item-food'>
                {order.items.map((item,index)=>{
                  if(index === order.items.length-1){
                    return item.name + " x " + item.quantity
                  }
                  else{
                    return item.name + " x " + item.quantity + ", "
                  }

                })}
              </p>
              <p className='order-item-name'></p>
                <div className="order-item-address">
                  <p>{order.address.street+","}</p>
                  <p>{order.address.city+", "+ order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
                </div>
                <p className='order-item-phone'></p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>${order.amount}</p>
            <select>
              <option value="Food-Processing">Food-Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            
            </select>
          </div>
        ))}
      </div>*/