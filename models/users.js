//Import mongoose module for mapping with database
const mongoose = require('mongoose');

//A model of schema is created
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);