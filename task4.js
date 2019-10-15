//Import module 'express'
const express = require('express');

//Import module JSON Web Token
const jwt = require('jsonwebtoken');

//Create an object of express
const app = express();

//Define port as 5000
const PORT = 5000;

//Create list of movies
var movies = [
    {
        title: 'Aynabaji',
        year: '2016',
        rating: '8.1',
        actors: [
            {
            name: 'Chanchal Chowdhury',
            birthday: '01 January, 1970',
            country: 'Bangladesh'
            },
            {
                name: 'Partha Barua',
                birthday: '01 January, 1971',
                country: 'Bangladesh'
            }
        ]
    },
    {
        title: 'Debi',
        year: '2018',
        rating: '7.1',
        actors: [
            {
            name: 'Chanchal Chowdhury',
            birthday: '01 January, 1970',
            country: 'Bangladesh'
            },
            {
                name: 'Iresh Zaker',
                birthday: '02 January, 1971',
                country: 'Bangladesh'
            }
        ]
    }
];

//Mock User
const user = {
    "username": "almas",
    "password": "dhakalive"
}

//POST request to "/api/user/login" is made
app.post('/api/user/login', (req, res) =>{
    jwt.sign({'user': user}, 'secretKey', (err, token) => {
        res.json({
            'token':token
        })
    })
});

//GET request to "/api/movies" is made
app.get('/api/movies', verifyToken, (req, res) => {  
    //verify authentication code
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        res.sendStatus(403);
    });
    
  });

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
      // Split at the space
      const bearer = bearerHeader.split(' ');
      // Get token from array
      const bearerToken = bearer[0];
      req.token = bearerToken;
      next();
    }
  }

//App is running on port (5000)
app.listen(PORT, ()=>{
    console.log("The app is running on port " + PORT);
});

