//Import Router from Express
const router = require('express').Router();
const verify = require('./verifyToken');

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
router.get('/', verify, (req, res) => {
    res.json(movies);
})

module.exports = router;