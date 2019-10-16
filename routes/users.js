//Import Router from Express
const router = require('express').Router();
//Import database schema
const User = require('../model/User');

router.post('/signup', async (req, res)=>{
    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
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