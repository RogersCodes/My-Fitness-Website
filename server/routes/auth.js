const express = require('express');
const User = require('../models/user');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const router = express.Router();



//Register new user
router.post('/signup', async (req, res) => {
    // debug feat console.log('Request Body:', req.body);
    const { firstName, lastName, password } = req.body;
    const email = req.body.email.toLowerCase();
    const confirmEmail = req.body.confirmEmail.toLowerCase();
    //Check if user has provided every entry
    if (!firstName || !lastName || !email || !confirmEmail || !password) {
        return res.status(400).json({ message: 'Please enter all fields' });
    }
    //Check if emails match
    if (email !== confirmEmail) {
        return res.status(400).json({ message: 'Emails do not match' });
    }

    try {
        //Check whether email is in use
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Email already in use' });
        }
        //Create a new user
        const user = new User({ firstName, lastName, email, password });
        //Save user to DB
        await user.save();

        //Generate JWT Token
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h"}
        );

        //Confirm a sucessful registration
        res.status(201).json({ 
            message: 'User registered successfully',
            token,
        user: {
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
        },
     });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

//Login an existing user
router.post('/login', async (req, res) => {
    console.log('Request Body:', req.body);
    const email = req.body.email.toLowerCase();
    const { password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }
    try {
        //Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        //Check if the entered password matches the hashed password
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        //Create and sign a JWT token
        const token = jwt.sign(
            { id: user._id , email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );
        //Return the token and user information to the client
        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            },
        });
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
// booking service
router.post('/book-service', async (req, res) => {
    console.log("Incoming request body:", req.body); //debugging line
    const { userId, service } = req.body;
    //validate input
    const validServices = ["meal-plan", "workout"];
    if (!validServices.includes(service)) {
        return res.status(400).json({ message: "Invalid service selected" });
    }
    //check if the userID is valid
    if (!userId || !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid or missing user ID"});
    }

    try {
        //find users by their id
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //Store services enterred
        if (!user.services) {
            user.services = [];
        }
        user.services.push(service);
        await user.save();
        return res.json({ 
            message: `You have succesfully booked for a ${service.replace("-", "")}. Rogers will reach out to you via email.`,
        });
    } catch (error) {
        console.error("Error booking service:", error);
        res.status(500).json({ message: "Server error. Try again later."});
    }
});
module.exports = router;