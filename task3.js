//Import module 'express'
const express = require('express');

//Import module JSON Web Token
const jwt = require('jsonwebtoken');

//Import module 'body-parser'
var bodyParser = require('body-parser')

//Create an object of express
const app = express();

// for parsing application/json
app.use(bodyParser.json())

//Define port as 5000
const PORT = 5000;

//POST request to "/api/user/login" is made
app.post('/api/user/login', (req, res) =>{
    jwt.sign({'user': req.body}, 'secretKey', (err, token) => {
        res.json({
            'token':token
        })
    })
});

//App is running on port (5000)
app.listen(PORT, ()=>{
    console.log("The app is running on port " + PORT);
});