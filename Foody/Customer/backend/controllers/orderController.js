import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";



// placing order 
const placeOrder = async (req, res) => {

    try {
       
        const newOrder = new orderModel({
            userID: req.body.userID,
            items: req.body.items,
            amount: req.body.amount,
            Address: req.body.Address
        });

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userID, { cartData: {} });

        res.json({ success: true, message: "Order placed successfully", orderId: newOrder._id });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "error is here" })

    }
}

export { placeOrder }