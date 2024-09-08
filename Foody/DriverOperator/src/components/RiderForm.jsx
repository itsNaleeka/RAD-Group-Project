import React from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
import "./RiderForm.css";

function RiderForm({ handleSubmit, handleOnChange, handleClose, reset }) {
  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleClose}>
          <IoCloseCircleOutline />
        </div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleOnChange}
          value={reset.name || ''}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={handleOnChange}
          value={reset.address || ''}
        />

        <label htmlFor="nic">National ID Number</label>
        <input
          type="number"
          id="nic"
          name="nic"
          onChange={handleOnChange}
          value={reset.nic || ''}
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={handleOnChange}
          value={reset.phone || ''}
        />

        <label htmlFor="vehicleType">Vehicle Type</label>
        <select
          id="vehicleType"
          name="vehicleType"
          onChange={handleOnChange}
          value={reset.vehicleType || ''}
        >
          <option value="">Select Vehicle Type</option>
          <option value="Car">Car</option>
          <option value="Van">Van</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Scooter">Scooter</option>
          <option value="Motorbike">Motorbike</option>
        </select>

        <label htmlFor="vehicleNumber">Vehicle Number</label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          onChange={handleOnChange}
          value={reset.vehicleNumber || ''}
        />

        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RiderForm;
