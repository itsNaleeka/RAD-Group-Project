import PropTypes from "prop-types";
import "./Form.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormTable = ({ onSubmitHandler, onChangeHandler, handleclose, rest }) => {
  return (
    <div className="addContainer">
      <form className="newflex-column" onSubmit={onSubmitHandler}>
        <div className="close-btn" onClick={handleclose}>
          <AiOutlineCloseCircle />
        </div>

        <div className="newadd-product-name">
        <p>Customer Name</p>
            <input
              onChange={onChangeHandler}
              value= {rest.name}
              type="text"
              name="name"
              placeholder="Ruwan Kumara"
              required
            />
        </div>

        <div className="add-product-name flex-col">
            <p>Phone Number</p>
            <input
            onChange={onChangeHandler}
            //value={rest.phone.startsWith("+94") ? rest.phone : `+94${rest.phone}`}
            value  = {rest.phone}
            type="tel"
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
              value= {rest.date}
              type="date"
              name="date"
              placeholder="Type here"
              required
            />
          </div>

          <div className="add-category-price">
            <div className="add-category flex-col">
              <p>Time</p>
              <select
                onChange={onChangeHandler}
                value= {rest.time}
                name="time"
              >
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
                value= {rest.table}
                type="Number"
                name="table"
                min="1"
                max="30"
                placeholder="1 - 30"
                required
              />
            </div>
          </div>

        <div className="newadd-category-price">
          <div className="newadd-category">
          <p>Food Category</p>
              <select
                onChange={onChangeHandler}
                value= {rest.category}
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

          <div className="newadd-price">
          <p>Full Price</p>
              <input
                onChange={onChangeHandler}
                value= {rest.price}
                type="number"
                name="price"
                placeholder="Rs.200"
                required
              />
          </div>
        </div>

        <div className="newadd-product-description">
        <p>Description</p>
            <textarea
              onChange={onChangeHandler}
              value= {rest.description}
              name="description"
              rows="6"
              placeholder="Write content here"
              required
            ></textarea>
        </div>

        <div className="add-product-name flex-col">
            <p>Members</p>
            <input
              onChange={onChangeHandler}
              value= {rest.members}
              type="number"
              min="1"
              max="6"
              name="members"
              placeholder="1 - 6"
              required
            />
          </div>

        <button type="submit" className="newadd-btn">
          Update
        </button>
      </form>
    </div>
  );
};

FormTable.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handleclose: PropTypes.func.isRequired,
  rest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired, // Add phone validation
    date: PropTypes.string.isRequired, // Add date validation
    time: PropTypes.string.isRequired,
    table: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Add table validation
    members: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Add members validation
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};


export default FormTable;
