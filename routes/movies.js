//Import Router from Express
const router = require('express').Router();
const verify = require('./verifyToken');


// Task 1 ==============================================
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
router.get('/actors', (req, res) => {
    res.json(actors);
});

// Task 4 ==============================================
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
    }
];

//Route for movies
//verify function will check authentication
//If have access, will show the movie otherwise will show "access denied"
router.get('/movies', verify, (req, res) => {
    res.json(movies);
})

module.exports = router;