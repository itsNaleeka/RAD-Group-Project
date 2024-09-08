import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rider.css';
import RiderForm from './RiderForm';
import Swal from 'sweetalert2';


const Rider = () => {
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    nic: "",
    phone: "",
    vehicleType: "",
    vehicleNumber: "",
  });

  const [ridersList, setDataList] = useState([]);

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    address: "",
    nic: "",
    phone: "",
    vehicleType: "",
    vehicleNumber: "",
    _id: "",
  });

  // Handle form input changes
  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission for adding a rider
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.post("/add/", formData);
    if (data.success) {
      setAddSection(false);
      setEditSection(false);
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Rider has been successfully added.',
        showConfirmButton: false,
        timer: 1500
      });
      getfetchData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: data.message,
        showConfirmButton: false,
        timer: 1500
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'An error occurred while adding the rider.',
      showConfirmButton: false,
      timer: 1500
    });
  }
};


  // Fetch data from the server
  const getfetchData = async () => {
    try {
      const { data } = await axios.get("/");
      if (data.success) {
        setDataList(data.data);
      } else {
        alert("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data ", error);
      alert("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    // Fetch data when the component is mounted
    getfetchData();
  }, []);

// Handle delete
const handleDelete = async (id) => {
  try {
    const { data } = await axios.delete("/delete/" + id);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Rider has been deleted successfully.',
        showConfirmButton: false,
        timer: 1500
      });
      getfetchData(); // Refresh the table data
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to delete rider.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'An error occurred while deleting the rider.',
      showConfirmButton: false,
      timer: 1500
    });
  }
};

  // Handle update for editing a rider
const handleUpdate = async (e) => {
  e.preventDefault();
  try {
    const { data } = await axios.put(`/edit/${formDataEdit._id}`, formDataEdit);
    if (data.success) {
      Swal.fire({
        icon: 'success',
        title: 'Updated!',
        text: 'Rider has been updated successfully.',
        showConfirmButton: false,
        timer: 1500
      });
      setEditSection(false);
      getfetchData();
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Failed!',
        text: 'Failed to update rider.',
        showConfirmButton: false,
        timer: 1500
      });
    }
  } catch (error) {
    console.error("Error updating data:", error);
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'An error occurred while updating the rider.',
      showConfirmButton: false,
      timer: 1500
    });
  }
};


  // Handle form input changes for editing
  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name] : value
    }));
  };

  // Set form data for editing
  const handleEdit = (rider) => {
    setFormDataEdit(rider);
    setEditSection(true);
    setAddSection(false);
  };

  return (
    <div className='ridersection'>
      <h4>Rider Management</h4>
      {!addSection && !editSection && (
        <button className="add" onClick={() => { setAddSection(true); setEditSection(false); }}>Add</button>
      )}

      {addSection && (
        <RiderForm
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleClose={() => { setAddSection(false); getfetchData(); }}
          reset={formData}
        />
      )}

      {editSection && (
        <RiderForm
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleClose={() => { setEditSection(false); getfetchData(); }}
          reset={formDataEdit}
        />
      )}

      {!addSection && !editSection && (
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>NIC</th>
                <th>Phone</th>
                <th>Vehicle Type</th>
                <th>Vehicle Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {ridersList.length > 0 ? (
                ridersList.map((rider,index) => (
                  <tr key={rider._id}>
                    <td>{index + 1}</td>
                    <td>{rider.name}</td>
                    <td>{rider.address}</td>
                    <td>{rider.nic}</td>
                    <td>{rider.phone}</td>
                    <td>{rider.vehicleType}</td>
                    <td>{rider.vehicleNumber}</td>
                    <td>
                      <button className="edit" onClick={() => handleEdit(rider)}>Edit</button>
                      <button className="delete" onClick={() => handleDelete(rider._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" style={{ textAlign: "center" }}>No data</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Rider;
