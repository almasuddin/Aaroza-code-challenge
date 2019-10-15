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