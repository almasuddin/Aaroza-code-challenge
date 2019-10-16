//Import Router from Express
const router = require('express').Router();
//Import database schema
const User = require('../model/User');
//Import module for hashing
const bcrypt = require('bcrypt');


router.post('/signup', async (req, res)=>{
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        username: req.body.name,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(err);
    }
});

module.exports = router;