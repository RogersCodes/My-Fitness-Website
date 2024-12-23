const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

//The user schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unqiue: true,
        lowercase: true,
        validate: {
            validator: (value) => {
                //validate email regex fn
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
            },
            message: 'Plase enter a valid email address',
        },
    },
    confirmEmail: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.email;
            },
            message: 'Email addresses do not match',
        },
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

//