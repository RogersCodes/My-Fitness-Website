const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

//Newsletter subscription route
router.post('/', async (req, res) => {
    console.log("incoming subscription request:", req.body);
    const { email, firstName, lastName } = req.body;
    if (!email || !firstName || !lastName) {
        return res.status(400).json({ message: "Please fill in all the fields."});
    }
    try {
        //check if a user has subscribed
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            return res.status(400).json({ message: "Email is already subscribed."});
        }
        //Save subscriber to MongoDB
        const newSubscriber = new Subscriber({ email, firstName, lastName });
        await newSubscriber.save();
        res.status(201).json({
            message: "🎉 Thank you for subscribing! Check your inbox for my latest guides.",
        });
    } catch (error) {
        console.error("Subscription error:", error);
        res.status(500).json({ message: "Server error. Please try again later."});
    }
});

module.exports = router;