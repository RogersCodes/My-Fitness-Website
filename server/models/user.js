const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

//The user schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
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
    /*confirmEmail: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return value === this.email;
            },
            message: 'Email addresses do not match',
        },
    },*/
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
});

//Hashing password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

//compare entered password with the hashed one
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//Create user model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;