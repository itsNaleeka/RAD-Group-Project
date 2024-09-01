import { useState } from 'react';
import './Add.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
  const url = "http://localhost:4000";
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",              
    category: "salad" // default value for category
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${url}/Add`, data); // Send the data object directly
      if(response.data.success){
        setData({
          name: "",
          description: "",
          price: "",     
          category: "salad"
        });
        toast.success(response.data.message);
        console.log(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("There was an error saving the data:", error);
      toast.error("There was an error saving the data.");
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here' required/>
        </div>

        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={data.category} name="category">
              <option value="cake">Cake</option>
              <option value="sandwich">Sandwich</option>
              <option value="biriyani">Biriyani</option>
              <option value="fried rice">Fried Rice</option>
              <option value="milk rice">Milk Rice</option>
              <option value="salad">Salad</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name="price" placeholder='$20' required/>
          </div>
        </div>
      
        <button type="submit" className="add-btn">Add</button>
      </form>
    </div>
  );
};

export default Add;
