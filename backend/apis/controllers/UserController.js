const express = require('express');
const UserService = require('../services/UserService');
const CreateBookingDTO = require('../dto/CreateBookingdto');
const CancelBookingDTO = require('../dto/CancelBookingdto');

const Booking = require('../models/Booking');

const router = express.Router();

// 예약 생성
router.post('/bookings', async (req, res) => {
    try {
        const {
            userId,
            storeId,
            bookingTime,
            feature,
            childName,
            childGender,
            expectedArrivalTime,
        } = req.body;

        // DTO를 사용해 입력 데이터를 검증 및 변환
        const createBookingDTO = new CreateBookingDTO(
            userId,
            storeId,
            bookingTime,
            feature,
            childName,
            childGender,
            expectedArrivalTime
        );

        // 서비스 계층을 통해 예약 생성 로직을 처리
        const newBooking = await UserService.CreateBooking(createBookingDTO);

        // 결과 반환
        res.status(201).json(newBooking);
    } catch (error) {
        console.error('Error creating booking:', error.message);
        res.status(400).json({ message: error.message });
    }
});



// 예약 시작
// router.put('/bookings/:id/start', async (req, res) => {
//     try {
//         const bookingId = req.params.id;
//         const result = await UserService.startBooking(bookingId);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(500).json(error);
//     }
// });

// 예약 상태 업데이트
router.patch('/bookings/:id/progress', async (req, res) => {
    try {
        const bookingId = req.params.id;
        const { status } = req.body;

        const result = await UserService.updateProgess(bookingId, status);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// 예약 취소
router.delete('/bookings/:id', async (req, res) => {
    try {
        const cancelBookingDTO = new CancelBookingDTO(req.params.id);
        const result = await UserService.CancelBooking(cancelBookingDTO);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// 특정 유저의 예약 내역 조회
router.get('/users/:userId/bookings', async (req, res) => {
    try {
        const userId = req.params.userId;
        const history = await UserService.getBookingHistory(userId);
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
