//Import Router from Express
const router = require('express').Router();
//Import database schema
const User = require('../model/User');
//Import module for hashing
const bcrypt = require('bcrypt');
//Import json web token module
const jwt = require('jsonwebtoken');

//Sign Up
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
        //create and assign a token
        const token = jwt.sign({username: user.username}, process.env.TOKEN_SECRET);
        res.json({'token': token});
    } catch (err) {
        res.status(400).send(err);
    }
});


//Login
router.post('/login', async (req, res) => {
    //check if the username not exist
    const user = await User.findOne({username: req.body.username});
    if(!user){
        return res.status(400).send('username not found');
    }
    //password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password)
    if(!validPass){
        return res.status(400).send("Invalid password");
    }

    //create and assign a token
    const token = jwt.sign({username: user.username}, process.env.TOKEN_SECRET);
    //show token
    res.header('auth-token', token).send(token);
})

module.exports = router;