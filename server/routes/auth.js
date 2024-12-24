const express = require('express');
const User = require('../models/user');
const router = express.Router();

//Register new user

router.post('/signup', async (req, res) => {
    const { name, email, confirmEmail, password } = req.body;
    //Check if user has provided everry entry
    if (!name || !email || !confirmEmail || !password) {
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
    const user = new User({ name, email, password });
    //Save user to DB
    await user.save();

    //Confirm a sucessful registration
    res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
    
});
module.exports = router;