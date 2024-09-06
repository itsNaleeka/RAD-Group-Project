import orderModel from "../models/orderModel.js";


// list orders for chef

const listOrders = async (req,res)  => {
    try{
        const orders = await orderModel.find({});
        res.json({success:true,data:orders})
    } catch(error){
        console.log(error);
        res,json({success:false,message:"Error"})
    }
}

export {listOrders}