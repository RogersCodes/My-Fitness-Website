const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true},
    subscribedAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model("Subscriber", subscriberSchema);