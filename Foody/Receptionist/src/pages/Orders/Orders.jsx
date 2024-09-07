import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";

const Orders = () => {
  const url = "http://localhost:4000";
  const [list, setList] = useState([]); // initialize with an empty array
  const [data, setData] = useState({
    date: "",
    time: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("date", data.date);
    formData.append("time", data.time);

    const response = await axios.post(
      `${url}/api/reservation/search`,
      formData
    );
    if (response.data.success) {
      console.log(response.data);
      setData({
        date: "",
        time: "",
      });
      setList(response.data.data);
      toast.success(response.data.message);
      console.log(response.data.data);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="list add flex-col">
      <form
        className="flex-col form-contain formmore"
        onSubmit={onSubmitHandler}
      >
        <h3>Search Table Reservations</h3>
        <div className="add-category-price">
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

          <div className="add-product-name flex-col timemore">
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
        </div>

        <button type="submit" className="add-btn">
          Search
        </button>
      </form>
      <div className="form-contain">
        <div className="list-table-format-table title">
          <b>Date</b>
          <b>Time</b>
          <b>Table ID</b>
        </div>
        {Array.isArray(list) && list.length > 0 ? (
          list.map((item, index) => {
            return (
              <div key={index} className="list-table-format-table">
                <p>{item.date}</p>
                <p>{item.time}</p>
                <p>{item.table}</p>
              </div>
            );
          })
        ) : (
          <p className="list-table-format-table">No Booked Tables</p>
        )}
      </div>
    </div>
  );
};

export default Orders;