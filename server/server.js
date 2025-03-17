require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const subscribeRoutes = require('./routes/subscribe');

const app = express();

//Middleware functions
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// ✅ CORS Configuration
const corsOptions = {
    origin: ['https://rogersfitnessclub.netlify.app', 'https://rogersfitnessclub.co.ke'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    maxAge: 86400
};

app.use(cors(corsOptions));

// ✅ Explicitly handle preflight (OPTIONS) requests
app.options('*', cors(corsOptions)); 


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
app.use('/api/subscribe', subscribeRoutes);

//Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

