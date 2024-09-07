import { useState } from "react";
import "./Add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = () => {
  const url = "http://localhost:4000";
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    table: "",
    category: "Cake",
    price: "",
    description: "",
    members: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(); //convert string type form data to suitable types
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("date", data.date);
    formData.append("time", data.time);
    formData.append("table", Number(data.table));
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("description", data.description);
    formData.append("members", Number(data.members));

    const response = await axios.post(`${url}/api/reservation/add`, formData); // Send the data object directly
    if (response.data.success) {
      setData({
        // set form empty after submit
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
      toast.success(response.data.message);
      console.log(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="center-container">
      <div className="add">
        <form className="flex-col form-contain" onSubmit={onSubmitHandler}>
          <h3>Make Reservation</h3>

          <div className="add-product-name flex-col">
            <p>Customer Name</p>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Ruwan Kumara"
              required
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Email</p>
            <input
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              name="email"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Phone Number</p>
            <input
              onChange={onChangeHandler}
              value={
                data.phone.startsWith("+94") ? data.phone : `+94${data.phone}`
              }
              type="text"
              pattern="(\+94)?[0-9]{9,12}"
              name="phone"
              maxLength={12}
              placeholder="+94 75 896 4519"
              required
            />
          </div>

          <div className="add-product-name flex-col">
            <p>Date</p>
            <input
              onChange={onChangeHandler}
              value={data.date}
              type="date"
              name="date"
              placeholder="Type here"
              required
            />
          </div>

          <div className="add-category-price">
            <div className="add-product-name flex-col">
              <p>Time</p>
              <select onChange={onChangeHandler} value={data.time} name="time">
                <option value="09.00-10.00 a.m">09.00-10.00 a.m</option>
                <option value="10.00-11.00 a.m">10.00-11.00 a.m</option>
                <option value="11.00-12.00 a.m">11.00-12.00 a.m</option>
                <option value="12.00-01.00 p.m">12.00-01.00 p.m</option>
                <option value="01.00-02.00 p.m">01.00-02.00 p.m</option>
                <option value="02.00-03.00 p.m">02.00-03.00 p.m</option>
                <option value="03.00-04.00 p.m">03.00-04.00 p.m</option>
                <option value="04.00-05.00 p.m">04.00-05.00 p.m</option>
                <option value="05.00-06.00 p.m">05.00-06.00 p.m</option>
                <option value="06.00-07.00 p.m">06.00-07.00 p.m</option>
                <option value="07.00-08.00 p.m">07.00-08.00 p.m</option>
                <option value="08.00-09.00 p.m">08.00-09.00 p.m</option>
                <option value="09.00-10.00 p.m">09.00-10.00 p.m</option>
                <option value="10.00-11.00 p.m">10.00-11.00 p.m</option>
                <option value="11.00-12.00 p.m">11.00-12.00 p.m</option>
              </select>
            </div>

            <div className="add-product-name flex-col">
              <p>Table ID</p>
              <input
                onChange={onChangeHandler}
                value={data.table}
                type="Number"
                name="table"
                min="1"
                max="30"
                placeholder="1 - 30"
                required
              />
            </div>
          </div>

          <div className="add-category-price">
            <div className="add-product-name flex-col">
              <p>Category</p>
              <select
                onChange={onChangeHandler}
                value={data.category}
                name="category"
              >
                <option value="cake">Cake</option>
                <option value="sandwich">Sandwich</option>
                <option value="biriyani">Biriyani</option>
                <option value="fried rice">Fried Rice</option>
                <option value="milk rice">Milk Rice</option>
                <option value="salad">Salad</option>
              </select>
            </div>

            <div className="add-product-name flex-col">
              <p>Full Price</p>
              <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                placeholder="Rs.200"
                required
              />
            </div>
          </div>

          <div className="add-product-description flex-col">
            <p>Description</p>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              rows="6"
              placeholder="Write content here"
            ></textarea>
          </div>

          <div className="add-product-name flex-col">
            <p>Members</p>
            <input
              onChange={onChangeHandler}
              value={data.members}
              type="number"
              min="1"
              max="6"
              name="members"
              placeholder="1 - 6"
              required
            />
          </div>

          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
