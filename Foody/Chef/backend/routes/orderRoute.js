import express from "express"
import { listOrders, removeOrder } from "../controllers/orderController.js";

const orderRouter = express.Router();


orderRouter.get("/list",listOrders);
orderRouter.post("/remove",removeOrder)



export default orderRouter;