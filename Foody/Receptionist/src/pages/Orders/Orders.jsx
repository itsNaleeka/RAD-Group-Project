import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

const List = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]); // initialize with an empty array

  const fetchList = async () => {
    const response = await axios.get(`${url}/`);
    if (response.data.success) {
      setList(response.data.data);  // if success, data will store in List
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodID) => {
    const response = await axios.delete(`${url}/Delete/${foodID}`);
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Name</b>
          <b>Description</b>
          <b>Price</b>
          <b>Category</b>
          <b>Action</b>
          <b>Action</b>
        </div>
        {list[0] ? ( 
          list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <p>{item.category}</p>
              <button className='btnchange'>Edit</button>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
                 );
           }
        )):(
            <p className="list-table-format">No data</p>)}
      </div>
    </div>
  );
};

export default List;
