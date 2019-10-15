//Import module 'express'
const express = require('express');

//Create an object of express
const app = express();

const PORT = 5000;

//Create list of actors
const actors = [
    {name: 'Humayun Faridi',
    birthday: 'May 29, 1952',
    country: 'Bangladesh'},
    {name: 'Zahid Hasan',
    birthday: 'October 4, 1965',
    country: 'Bangladesh'},
    {name: 'Asaduzzaman Noor',
    birthday: 'October 31, 1946',
    country: 'Bangladesh'}
];

//Respond with ACTOR'S LIST when a GET request to "/api/actors" is made
app.get('/api/actors', (req, res) => {
    res.json(actors);
});

//App is running on port (5000)
app.listen(PORT, ()=>{
    console.log("The app is running on port " + PORT);
});