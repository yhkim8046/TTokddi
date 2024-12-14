const mongoose = require('mongoose');

// Store 스키마 정의
const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    contact: {
        type: String,
        required: true, 
        trim: true
    },
    address: { 
        type: String,
        required: true, 
        unique: true, 
        trim: true
    },
    coordinate: [{
        type: String,
        trim: true
    }],
    //가게가 유저의 요청을 처리할 수 있는지
    isAvailable:{
        type: Boolean,
        require: true,
        default: false,
    },
    ongoingBookings: [{
        type: mongoose.Schema.Types.ObjectId, // Booking 참조
        ref: 'Booking',
    }],
    doneBookings: [{
        type: mongoose.Schema.Types.ObjectId, // Booking 참조
        ref: 'Booking',
    }],
});

const Store = mongoose.model('Store', storeSchema); 

module.exports = Store;
