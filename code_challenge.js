//Import module 'express'
const express = require('express');

//Import module JSON Web Token
const jwt = require('jsonwebtoken');

//Import mongoose module for mapping with database
const mongoose = require('mongoose');

//Import module dotenv for environment variables
const dotenv = require('dotenv');

//.env file is configured in this file
dotenv.config();

//Import custom module for movies
const moviesRoute = require('./routes/movies');
//Import custom module for users
const usersRoute = require('./routes/users');


//Define port as 5000
const PORT = 5000;

//Create an object of express
const app = express();

//connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, ()=>{
  console.log("connected to database");
});

//Middleware
app.use(express.json());

//Route Middleware for '/api/movies'
app.use('/api', moviesRoute);
//Route Middleware for '/api/user'
app.use('/api/user', usersRoute);

//App is running on port (5000)
app.listen(PORT, ()=>{
    console.log("The app is running on port " + PORT);
});