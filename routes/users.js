//Import Router from Express
const router = require('express').Router();
//Import database schema
const User = require('../model/User');
//Import module for hashing
const bcrypt = require('bcrypt');
//Import json web token module
const jwt = require('jsonwebtoken');


router.post('/signup', async (req, res)=>{
    // Check if user exist
    const userExist = await User.findOne({username: req.body.username});
    if(userExist){
        return res.status(400).send('user already exists');
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        username: req.body.username,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;