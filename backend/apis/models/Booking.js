const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    store: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true,
    },
    departureTime: {
        type: Date,
        required: true,
    },
    isBookingClosed: {
        type: Boolean,
        required: true,
        default: false,
    },
    feature: {
        type: String,
        required: true,
    },
    inProgress: {
        type: Boolean,
        default: false,
    },
    distance: {
        type: Number,
    },
    status: {
        type: String,
        enum: [
            '아이가 집에서 출발했습니다.',
            '아이가 가게에 도착했습니다.',
            '아이가 가게에서 출발했습니다.',
            '아이가 집에 도착했습니다.',
        ],
    },
    isAnswered: {
        type: Boolean,
    },
    expectedArrivalTime: {
        type: Date,
    },
});

// 12시간 형식 변환 유틸리티 함수
function formatTo12Hour(date) {
    if (!date) return null;
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

// 가상 필드 추가
bookingSchema.virtual('departureTimeFormatted').get(function () {
    return formatTo12Hour(this.departureTime);
});

bookingSchema.virtual('expectedArrivalTimeFormatted').get(function () {
    return formatTo12Hour(this.expectedArrivalTime);
});

// JSON 변환 시 가상 필드 포함
bookingSchema.set('toJSON', { virtuals: true });
bookingSchema.set('toObject', { virtuals: true });

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
