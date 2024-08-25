const express = require("express");
const router = express.Router();
const Rider = require("../models/rider.js"); // Ensure this model is correctly defined in models

// Create and save a new rider
router.post("/add", async (req, res) => {
  const { name, nic, address, phone, vehicleType, vehicleNumber } = req.body;

  try {
    const newRider = new Rider({
      name,
      nic,
      address,
      phone,
      vehicleType,
      vehicleNumber
    });
    await newRider.save(); // Save the new rider to the database
    res.status(201).json({ success: true, message: "Rider added successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "An error occurred while adding the rider." });
  }
});

// Fetch all riders
router.get("/", async (req, res) => {
  try {
    const riders = await Rider.find();
    res.status(200).json({ success: true, data: riders });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "An error occurred while fetching riders." });
  }
});

// Update rider details by ID
router.put("/edit/:id", async (req, res) => {
  const userId = req.params.id;
  const { name, nic, address, phone, vehicleType, vehicleNumber } = req.body;

  try {
    const updatedRider = await Rider.findByIdAndUpdate(
      userId,
      { name, nic, address, phone, vehicleType, vehicleNumber },
      { new: true }
    );
    if (!updatedRider) {
      return res.status(404).json({ success: false, message: "Rider not found" });
    }
    res.status(200).json({ success: true, message: "Rider updated successfully", data: updatedRider });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error updating rider", error: err.message });
  }
});

// Delete rider by ID
router.delete("/delete/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const deletedRider = await Rider.findByIdAndDelete(userId);
    if (!deletedRider) {
      return res.status(404).json({ success: false, message: "Rider not found" });
    }
    res.status(200).json({ success: true, message: "Rider deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error deleting rider", error: err.message });
  }
});

// Fetch a single rider by ID
router.get("/get/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const rider = await Rider.findById(userId);
    if (!rider) {
      return res.status(404).json({ success: false, message: "Rider not found" });
    }
    res.status(200).json({ success: true, data: rider });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Error fetching rider", error: err.message });
  }
});

module.exports = router;
