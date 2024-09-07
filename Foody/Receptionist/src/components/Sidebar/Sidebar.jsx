import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="/add" className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>add reservation</p>
        </NavLink>
        <NavLink to="/" className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>list reservations</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option">
          <img src={assets.table_icon} alt="" />
          <p>search table</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
