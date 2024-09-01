import PropTypes from 'prop-types';
import './Form.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const FormTable = ({ onSubmitHandler, onChangeHandler, handleclose, rest }) => {
  return (
    <div className="addContainer">
      <form className="newflex-column" onSubmit={onSubmitHandler}>
        <div className="close-btn" onClick={handleclose}><AiOutlineCloseCircle /></div>
        <div className="newadd-product-name">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={rest.name} type="text" name="name" placeholder='Type here' required />
        </div>

        <div className="newadd-product-description">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={rest.description} name="description" rows="6" placeholder="Write content here" required></textarea>
        </div>

        <div className="newadd-category-price">
          <div className="newadd-category">
            <p>Product Category</p>
            <select onChange={onChangeHandler} value={rest.category} name="category">
              <option value="cake">Cake</option>
              <option value="sandwich">Sandwich</option>
              <option value="biriyani">Biriyani</option>
              <option value="fried rice">Fried Rice</option>
              <option value="milk rice">Milk Rice</option>
              <option value="salad">Salad</option>
            </select>
          </div>

          <div className="newadd-price">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={rest.price} type="number" name="price" placeholder='$20' required />
          </div>
        </div>

        <button type="submit" className="newadd-btn">Update</button>
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
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default FormTable;
