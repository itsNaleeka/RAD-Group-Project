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
    description: "",
    price: "",              
    category: "",
  });


  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);  // if success, data will store in List
    } else {
      toast.error("Error");
    }
  }

  const removeFood = async (foodId) => {
     const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
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
   const response = await axios.put(`${url}/api/food/update`,{
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
      description: item.description,
      price: item.price,
      category: item.category,
     });
     setEditSection(true)
}

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='listflex-col'>
      <h4 className='topic'>All Food List</h4>
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
          <b>Description</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
          <b>Action</b>
        </div>
        {list[0] ? ( {
          list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <p>{item.category}</p>
              <button className='btnchange' onClick={()=>handleEdit(item)}>Edit</button>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
                 );
           }
        )}):(
            <p className="list-table-format">No data</p>)}
      </div>
    </div>
    </div>
  );
};

export default List;