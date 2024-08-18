const router = require("express").Router();
let Rider = require ("../models/rider.js");

router.route("/add").post((req,res)=>{
    
    const name = req.body.name;
    const nic = req.body.nic;
    const address = req.body.address;
    const phone = req.body.phone;
    const vehicleType = req.body.vehicleType;
    const vehicleNumber = req.body.vehicleNumber;


    const newRider = new Rider ({
        name,
        nic,
        address,
        phone,
        vehicleType,
        vehicleNumber
    })

    newRider.save().then(()=>{
        res.json("Rider added!");
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "An eror occurred while adding the rider."});
    })

})

router.route("/").get((req,res)=>{
    Rider.find().then((riders)=> {
        res.json(riders)
    }).
    catch((err)=>{
        console.log(err);
    })
})

//http://localhost:8070/update/id

router.route("/edit/:id").put(async (req,res) => {
    let userId = req.params.id;//get the id parameter and fetch it(how to fetch the id)
    //destructure
    const {name,nic,address,phone,vehicleType,vehicleNumber } = req.body;

    const updateRider = {
        name,
        nic,
        address,
        phone,
        vehicleType,
        vehicleNumber
    }

    const update = await Rider.findByIdAndUpdate(userId, updateRider).then(() =>{
        res.status(200).send({status: "User update", user:update})
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })


})

router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Rider.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({status:"User deleted"});
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({status: "Error with delete user", error: err.message});
        })
})


router.route("/get/:id").get(async(req,res) =>{
    let userId = req.params.id;
    await Rider.findOne(userId)
        .then(() =>{
            res.status(200).send({status: "User fetched", user: user})
        })
        .catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get user", error: err.message});
        })
})

module.exports = router;