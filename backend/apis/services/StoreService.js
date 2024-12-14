const Store = require("../models/Store");
const Booking = require('../models/Booking');

class StoreService{
    async seedStores() {
        try {
            const stores = [
                {
                    name: '버터핑거 팬케익스 분당점',
                    contact: '010-0102-9876',
                    isAvailable: true,
                    address: '경기도 성남시 분당구',
                    distance:150,
                    coordinate: ['37.372208','127.105593']
                    
                },
                {
                    name: '이마트 에브리데이 분당정자점',
                    contact: '010-0231-6789',
                    address: '경기도 성남시 분당구',
                    isAvailable: false,
                    distance:200,
                    coordinate: ['37.371887','127.106263']
                },
            ];

            for (const store of stores) {
                const newStore = new Store(store);
                await newStore.save();
            }

            console.log('스토어 초기화 성공!');
        } catch (err) {
            console.error('스토어 초기화 실패:', err.message);
        }
    }

    async answerBooking(bookingId, storeId) {
        try {
            const targetBooking = await Booking.findById(bookingId);
    
            // 예약이 존재하지 않을 경우 에러 처리
            if (!targetBooking) {
                throw new Error('예약이 확인되지 않습니다.');
            }
    
            // 예약의 store 필드와 storeId 비교
            if (targetBooking.store.toString() !== storeId) {
                throw new Error('잘못된 가게 입니다.');
            }

            if (targetBooking.isAnswered){
                throw new Error('이미 처리된 예약입니다.');
            }
    
            //예약 처리 작업 수행 (필요시 추가)
            targetBooking.isAnswered = True;
            await targetBooking.save();
    
            return { 
                status: 200, 
                message: '요청에 대한 응답이 성공적으로 저장되었습니다.', 
                booking: targetBooking 
            };
        } catch (error) {
            return { 
                status: error.status || 500, 
                message: error.message || '요청에 응답하는 과정에서 문제가 발생했습니다.' 
            };
        }
    }

    async getBookingHistory(storeId) {
        try {
            if (!storeId) {
                throw { status: 400, message: '가게 아이디를 입력해주세요' };
            }
    
            // 사용자 검색
            const storeBookings = await Store.findById(storeId).populate('ongoingBookings doneBookings');
            if (!storeBookings) {
                throw { status: 404, message: '예약 히스토리가 확인되지 않습니다.' };
            }
    
            // 예약 내역 반환
            return {
                ongoingBookings: storeBookings.ongoingBookings,
                doneBookings: storeBookings.doneBookings,
            };
        } catch (error) {
            throw {
                status: 500,
                message: `예약 내역을 불러오는데 에러가 발생했습니다. : ${error.message}`,
                stack: error.stack,
            };
        }
    }
    
    async getProgress(bookingId, storeId) {
        try {
            // 필수 파라미터 검증
            if (!storeId) {
                throw { status: 400, message: '가게 아이디를 입력해주세요' };
            }
            if (!bookingId) {
                throw { status: 400, message: '요청서 아이디를 입력해주세요' };
            }
    
            // 예약 찾기
            const targetBooking = await Booking.findById(bookingId);
            if (!targetBooking) {
                throw { status: 404, message: '요청서를 찾을 수가 없습니다.' };
            }
    
            // 가게 ID 확인
            const bookingStoreId = targetBooking.store.toString();
            if (bookingStoreId !== storeId) {
                throw { status: 403, message: '요청서에 기록되어 있는 가게 아이디가 다릅니다.' };
            }
    
            // 성공적으로 예약 진행 상태 반환
            return {
                status: 200,
                message: '성공적으로 예약 진행 상태를 반환했습니다.',
                progress: targetBooking.progress,
            };
        } catch (error) {
            // 에러 반환
            return {
                status: error.status || 500,
                message: error.message || '예약 진행 상태를 불러오는데 문제가 발생했습니다.',
            };
        }
    }

    async updateProgess(bookingId, storeId, status) {
        try {
            // 예약 조회
            const targetBooking = await Booking.findById(bookingId);
    
            // 예약이 존재하지 않을 경우 처리
            if (!targetBooking) {
                throw { status: 404, message: '요청서를 찾을 수가 없습니다.' };
            }
    
            // 스토어 ID 검증
            if (targetBooking.store.toString() !== storeId) {
                throw { status: 403, message: '요청에 대한 가게 아이디가 다릅니다.' };
            }
    
            // 예약 상태 업데이트
            targetBooking.inProgress = true;
            targetBooking.progress = status;
    
            // 변경 사항 저장
            const updatedBooking = await targetBooking.save();
    
            return { 
                status: 200, 
                message: '요청서가 성공적으로 업데이트 되었습니다.', 
                booking: updatedBooking 
            };
        } catch (error) {
            throw {
                status: error.status || 500,
                message: error.message || '업데이트를 하는데 문제가 발생했습니다.',
                stack: error.stack,
            };
        }
    }
   
    async getCurrentBookings(storeId) {
        try {
            if (!storeId) {
                throw { status: 400, message: '가게 아이디를 입력해주세요' };
            }
    
            // 진행 중인 예약만 가져오기
            const store = await Store.findById(storeId).populate({
                path: 'ongoingBookings',
                match: { inProgress: true }, // 필터링 조건 추가
            });
    
            if (!store) {
                throw { status: 404, message: '가능한 가게를 찾지 못했습니다.' };
            }
    
            // 진행 중인 예약 반환
            return {
                status: 200,
                message: '진행 중인 요청들을 성공적으로 불러왔습니다.',
                ongoingBookings: store.ongoingBookings,
            };
        } catch (error) {
            throw {
                status: error.status || 500,
                message: error.message || '요청 내역을 확인하는데 문제가 발생했습니다.',
                stack: error.stack,
            };
        }
    }

    async updateStoreStatus(storeId){
        try{
            const availability = await Booking.findByIdAndUpdate(
                storeId,
                {
                    isAvailable: true,
                },
                { new: true } // 업데이트된 문서 반환
            );
    
            // 변경 사항 저장
            await availability.save();
    
            return { message: '가게 상태가 업데이트 되었습니다.'};
        }catch(error){
            throw{
                status: error.status || 500,
                message: error.message || '요청서의 상태를 불러오는데 에러가 발생했습니다.',
                stack: error.stack,
            }
        }
    }
    
    async getStoreInfo(storeId) {
        try {
            // 스토어 ID 검증
            if (!storeId) {
                throw { status: 400, message: '가게 아이디를 입력해주세요' };
            }
    
            // 스토어 정보 조회
            const store = await Store.findById(storeId);
            if (!store) {
                throw { status: 404, message: '가게가 발견되지 않았습니다.' };
            }
    
            // 스토어 정보 반환
            return {
                status: 200,
                message: '가게 정보를 성공적으로 불러왔습니다.',
                store, // 조회된 스토어 데이터 반환
            };
        } catch (error) {
            // 에러 반환
            throw {
                status: error.status || 500,
                message: error.message || '가게 정보를 불러오는데 실패하였습니다.',
                stack: error.stack,
            };
        }
    }
    
}

module.exports = new StoreService();