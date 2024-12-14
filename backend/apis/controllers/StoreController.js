const express = require('express');
const StoreService = require('../services/StoreService');

const router = express.Router();

// 예약 처리
router.put('/bookings/:bookingId/answer', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { storeId } = req.body; // Store ID는 본문에서 전달
        const result = await StoreService.answerBooking(bookingId, storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 스토어 예약 히스토리 조회
router.get('/stores/:storeId/bookings/history', async (req, res) => {
    try {
        const { storeId } = req.params;
        const result = await StoreService.getBookingHistory(storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 특정 예약 진행 상태 조회
router.get('/bookings/:bookingId/progress', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { storeId } = req.body; // Store ID는 본문에서 전달
        const result = await StoreService.getProgress(bookingId, storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 특정 예약 진행 상태 업데이트
router.patch('/bookings/:bookingId/progress', async (req, res) => {
    try {
        const { bookingId } = req.params;
        const { storeId, status } = req.body;
        const result = await StoreService.updateProgess(bookingId, storeId, status);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 진행 중인 예약 조회
router.get('/stores/:storeId/bookings/ongoing', async (req, res) => {
    try {
        const { storeId } = req.params;
        const result = await StoreService.getCurrentBookings(storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 스토어 상태 업데이트
router.patch('/stores/:storeId/status', async (req, res) => {
    try {
        const { storeId } = req.params;
        const result = await StoreService.updateStoreStatus(storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

// 스토어 정보 조회
router.get('/stores/:storeId', async (req, res) => {
    try {
        const { storeId } = req.params;
        const result = await StoreService.getStoreInfo(storeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(error.status || 500).json({ message: error.message });
    }
});

module.exports = router;
