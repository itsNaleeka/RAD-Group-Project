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

//remove completed orders

const removeOrder = async(req,res) =>{
    try {
        console.log(req.body);
        const order = await orderModel.findById(req.body.id);
        await orderModel.findByIdAndDelete(req.body.id); //delete teh order from DB
        res.json({success:true,message:"Order Removed",data:order})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Order doesn't exists"})
    }
}

export {listOrders, removeOrder}