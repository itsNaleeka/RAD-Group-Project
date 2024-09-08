import reservationModel from "../models/reservationModel.js";

// add table Reservation

const addReservation = async (req, res) => {            // asynchronous function with response and request objects req - HTTP request data , res - data want to sent to frontend
  const reservation = new reservationModel(req.body);
  try {
    await reservation.save();   // using this await keyword the next line never execute uptil this line is executed
    res.json({ success: true, message: "Reservation Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// list all Reservations

const listReservation = async (req, res) => {
  try {
    const reservations = await reservationModel.find({});          // find all - {}
    res.json({ success: true, data: reservations });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

//update Reservation

const updateReservation = async (req, res) => {
  try {
    const { id, ...rest } = req.body;
    await reservationModel.updateOne({ _id: id }, rest);
    res.json({ success: true, message: "Reservation Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// remove Reservation

const removeReservation = async (req, res) => {
  try {
    await reservationModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Reservation Removed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// search booked table using spacific date and time

const searchTable = async (req, res) => {
  try {
    const { date, time } = req.body; // Extract the date and time from the request body

    // query oject to pass data to  find method as key value pairs
    let tablebooking = {}; // Base tablebooking to find all booked tables

    if (date) {
      tablebooking.date = date;
    }
    if (time) {
      tablebooking.time = time;
    }
    const bookedTables = await reservationModel.find(tablebooking);
    res.json({ success: true, data: bookedTables });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error retrieving reservations" });
  }
};

export {
  addReservation,
  listReservation,
  updateReservation,
  removeReservation,
  searchTable,
};
