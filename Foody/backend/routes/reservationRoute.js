import express from 'express'
import {addReservation, listReservation, updateReservation, removeReservation, searchTable } from '../controllers/reservationController.js'
import multer from 'multer'

const upload = multer();     // to handle form data

const reservationRouter = express.Router();

reservationRouter.post("/add",upload.none(), addReservation);
reservationRouter.get("/list", listReservation);
reservationRouter.put("/update", updateReservation);
reservationRouter.post("/remove", removeReservation);
reservationRouter.post("/search",upload.none(), searchTable);


export default reservationRouter;