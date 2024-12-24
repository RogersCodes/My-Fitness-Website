require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

//Middleware functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connnect to MongoDb
connectDB();

//Routes
app.get('/', (req, res) => res.send('Fitness API is running'));


//Authentication routes
app.use('/api/auth', authRoutes);

//Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

