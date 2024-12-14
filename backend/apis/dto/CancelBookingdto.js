class CancelBookingDTO {
    constructor(bookingId) {

        if (!bookingId) throw new Error('bookingId is required');

        this.bookingId = bookingId;
    }
}

module.exports = CancelBookingDTO;
