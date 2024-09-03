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


export { addReservation, listReservation, updateReservation, removeReservation}