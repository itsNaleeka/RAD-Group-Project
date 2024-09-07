import reservationModel from "../models/reservationModel.js"


// add table Reservation

const addReservation = async (req,res) => {
    const reservation = new reservationModel(req.body); 
    try {
        console.log(reservation)
        await reservation.save();
        res.json({success: true, message: "Reservation Added"})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}


// list all Reservations

const listReservation = async(req,res) => {
    try {
        const reservations = await reservationModel.find({});
        res.json({success: true, data: reservations})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}


//update Reservation

const updateReservation = async (req,res) => {
    try {
        console.log(req.body)
        const {id, ...rest} = req.body
        console.log(rest)
        const data = await reservationModel.updateOne({_id: id}, rest);
        res.json({success: true,message: "Reservation Updated"})
    } catch(error){
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}


// remove Reservation

const removeReservation =  async (req,res) => {
    try {
        await reservationModel.findByIdAndDelete(req.body.id);
        res.json({success: true, message: "Reservation Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"})
    }
}

const searchTable = async (req, res) => {
    const { date, time } = req.body; // Extract the date and time from the request body
 
    // query oject to pass data to  find method as key value pairs
    let tablebooking = {}; // Base tablebooking to find all booked tables

    // If date is provided, add it to the tablebooking
    if (date) {
        tablebooking.date = date;
    }
    // If time is provided, add it to the tablebooking
    if (time) {
        tablebooking.time = time;
    }

    try {
        // Perform the search based on the constructed tablebooking
        const bookedTables = await reservationModel.find(tablebooking);
        res.json({ success: true, data: bookedTables });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error retrieving reservations" });
    }
};


export { addReservation, listReservation, updateReservation, removeReservation, searchTable}