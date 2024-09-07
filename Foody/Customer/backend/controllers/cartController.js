import userModel from "../models/userModel.js";


// add to cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userID)
        let cartData = await userData.cartData
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.body.userID, {cartData})
        res.json({success:true, message:"Item added to cart"})
    } catch (error) {
        console.log(error)
        return res.json({success:false, message:"Internal Server Error"})
        
    }
}


// remove from cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userID)
        let cartData = await userData.cartData
        if(cartData[req.body.itemId]  > 0) {
            cartData[req.body.itemId] -= 1
        }
        await userModel.findByIdAndUpdate(req.body.userID, {cartData})
        res.json({success:true, message:"Item removed from cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}


// fetch cart list
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.body.userID)
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message: "Error"})
        
    }
}


export { addToCart, removeFromCart, getCart}