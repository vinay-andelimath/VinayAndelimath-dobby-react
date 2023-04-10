require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connection = require('./db');
const userRoutes=require('./routes/user');
const authRoutes=require('./routes/auth');

//database connection
connection()

//middleware
app.use(express.json())
app.use(cors())

//routes
app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);

const port = process.env.Port || 8080;
app.listen(port, () => console.log('Listening to ' + port));
