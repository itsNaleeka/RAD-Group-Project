import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

import FormTable from '../../components/Form/Form.jsx';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]); // initialize with an empty array

  const [editSection,setEditSection] = useState(false)

  const [formDataEdit, setFormDataEdit] = useState({
    id : "",
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    table: "",
    category: "", 
    price: "",
    description: "",
    members: "",
  });


  const fetchList = async () => {
    const response = await axios.get(`${url}/api/reservation/list`);
    if (response.data.success) {
      setList(response.data.data);  // if success, data will store in List
    } else {
      toast.error("Error");
    }
  }

  const removeReservation = async (reservationId) => {
     const response = await axios.post(`${url}/api/reservation/remove`,{id:reservationId});
     await fetchList();
     if(response.data.success){
      toast.success(response.data.message)
     }
     else{
      toast.error("Error")
     }
  }

  const handleUpdate = async(event) => {
   event.preventDefault()
   console.log(formDataEdit)
   const response = await axios.put(`${url}/api/reservation/update`,{
    id: formDataEdit.id, ...formDataEdit});
   await fetchList();
   if (response.data.success) {
    toast.success(response.data.message);
    setEditSection(false)
  } else {
    toast.error("Error");
  }
}

  const handleEditOnChange = async (event) => {
     const {name, value} = event.target
      setFormDataEdit(data => ({ ...data, [name]: value }));
}

const handleEdit = (item)=>{

     setFormDataEdit({
      id: item._id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      date: item.date,
      time: item.time,
      table: item.table,
      category: item.category,
      price: item.price,
      description: item.description,
      members: item.members,
     });
     setEditSection(true)
}

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <h4 className='topic'>All Table Reservations</h4>
      <div>
            {
        editSection && (
        <FormTable
        onSubmitHandler = {handleUpdate}
        onChangeHandler = {handleEditOnChange}
        handleclose = {() => setEditSection(false)}
        rest={formDataEdit}
        />
        )
      }
            <div className="list-table">
        <div className="list-table-format title">
          <b>Name</b>
          <b>Email</b>
          <b>Phone Number</b>
          <b>Date</b>
          <b>Time</b>
          <b>Table</b>
          <b>Category</b>
          <b>Price</b>
          <b>Description</b>
          <b>Members</b>
          <b>Edit Reservation</b>
          <b>Remove Reservation</b>
        </div>
          {Array.isArray(list) && list.length > 0 ? (
          list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.phone}</p>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <p>{item.table}</p>
              <p>{item.category}</p>
              <p>RS.{item.price}</p>
              <p>{item.description}</p>
              <p>{item.members}</p>
              <button className='btnchange' onClick={()=>handleEdit(item)}>Edit</button>
              <p onClick={()=>removeReservation(item._id)} className='cursor'>X</p>
            </div>
                 );
           })
          ): <p className="list-table-format">No data</p>
        }
      </div>
    </div>
    </div>
  );
};

export default List;


//        {list[0] ? ( )
//    (  <p className="list-table-format">No data</p>)