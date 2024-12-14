const mongoose = require('mongoose');

// User 스키마 정의
const userSchema = new mongoose.Schema({
    childName: {
        type: String,
        required: true, 
        trim: true, 
    },
    childAge:{
        type: Number,
        required: true,
    },
    childGender:{ 
        type:'String',
        required: true
    },
    ongoingBookings: [{
        type: mongoose.Schema.Types.ObjectId, // Booking 참조
        ref: 'Booking',
    }],
    doneBookings: [{
        type: mongoose.Schema.Types.ObjectId, // Booking 참조
        ref: 'Booking',
    }],
    userContact:{
        type:String,
        required: true,
        trim: true
    },
    userAddress:{
        type:String,
        required: true,
        trim: true
    }
});


const User = mongoose.model('User', userSchema); 

module.exports = User;
