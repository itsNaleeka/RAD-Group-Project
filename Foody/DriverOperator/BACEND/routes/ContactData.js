const express = require('express');
const router = express.Router;
const ContactData = require('../models/contactdata');

router.post("/submit", async (req,res) =>{
    const {data} = req.body;

    try {
        const newData =  new  ContactData({
            data,
        });
        await newData.save();
        res.status(201).json({ success: true, message: "Your message send successfully"})
    }
    catch(err){
        console.log(err);
        re.status(500).json({ success : true, message : "Error occur submitting"})
    }
})










module.exports = router;
