const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");
const nodemailer = require("nodemailer");

//nodemailer setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,  
    },
});

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
        const mailOptions = {
            from: `"Rogers Fitness Club" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Welcome to Rogers Fitness Club!",
            html: `
            <h2> Welcome, ${firstName}!</h2>
            <p>Thank you for subscribing to my fitness newsletters.</p>
            <p>I know that this year started off rough but you can always focus on self-improvement.</p> 
            <p>I am here to guide you in your fitness journey.</P>
            <p>I was once in the same place as you are right now, trying to gain muscle or lose some weight, whatever it is that you want to improve.</p>
            <p>My nutrition and workout plans cover all the factors that you may be missing such as supplementation, meal timing, meal planning, insulin optimization, weight loss, muscle gain, or even maintenance!</p>
            <p>Expect workout tips, nutrition guides, and exclusive fitness content straight to your inbox.</p>
            <p>Respond to this email with goals that you want to achieve this year, and I will guide through the journey.</p>
            <p>Stay fit and stay motivated!</p>
            <br>
            <strong>Rogers Fitness Club</strong>
            `,
        };
        await transporter.sendMail(mailOptions);


        res.status(201).json({
            message: "🎉 Thank you for subscribing! Check your inbox for my latest guides.",
        });
    } catch (error) {
        console.error("Subscription error:", error);
        res.status(500).json({ message: "Server error. Please try again later."});
    }
});

module.exports = router;