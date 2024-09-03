import express from 'express'
import {addReservation, listReservation, updateReservation, removeReservation } from '../controllers/reservationController.js'
import multer from 'multer'

const upload = multer();     // to handle form data

const reservationRouter = express.Router();

reservationRouter.post("/add",upload.none(), addReservation);
reservationRouter.get("/list", listReservation);
reservationRouter.put("/update", updateReservation);
reservationRouter.post("/remove", removeReservation);

export default reservationRouter;