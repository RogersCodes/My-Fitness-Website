require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();

//Middleware functions
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/dashboard', (req, res) => {
    console.log(req.body);
    res.send('Welcome to the dashboard');
});
//Connnect to MongoDb
connectDB();

//Routes
app.get('/', (req, res) => res.send('Fitness API is running'));


//Authentication routes
app.use('/api/auth', authRoutes);

//Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

