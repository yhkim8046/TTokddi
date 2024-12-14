const User = require("../models/User");
const Booking = require('../models/Booking');
const mongoose = require('mongoose'); // mongoose 임포트
const Store = require('../models/Store'); // Store 임포트

class UserService {
    //더미유저 생성
    async seedUsers() {
        try {
            const users = [
                {
                    childName: '태호',
                    childAge: 4,
                    childGender: '남아',
                    userContact: '01024041234',
                    userAddress: '경기도 수원시 영통구 하동 광교로 1 구름아파트 101동 2401호',
                },
                {
                    childName: '민지',
                    childAge: 3,
                    childGender: '여아',
                    userContact: '01012312423',
                    userAddress: '경기도 수원시 영통구 상동 호수로 3 구름시티 204동 2003호',
                },
            ];

            for (const user of users) {
                const newUser = new User(user);
                await newUser.save();
            }

            console.log('유저 초기화 성공!');
        } catch (err) {
            console.error('유저 초기화 실패:', err.message);
        }
    }

    async CreateBooking(createBookingdto) {
        try {
            // DTO 확인
            console.log("createBookingdto:", createBookingdto);
    
            // Booking 생성
            const booking = new Booking({
                user: createBookingdto.userId,
                store: createBookingdto.storeId,
                departureTime: createBookingdto.bookingTime,
                expectedArrivalTime: createBookingdto.expectedArrivalTime,
                feature: createBookingdto.feature,
                childName: createBookingdto.childName,
                childGender: createBookingdto.childGender
            });
    
            const savedBooking = await booking.save();
    
            // Booking 결과 확인
            console.log("savedBooking:", savedBooking);
            
            // Store 업데이트
            if (createBookingdto.storeId != undefined) {
                const storeId = new mongoose.Types.ObjectId(createBookingdto.storeId); // 여기 수정
    
                // Store 존재 여부 확인
                const storeBeforeUpdate = await Store.findById(storeId);
                console.log("storeBeforeUpdate:", storeBeforeUpdate);
    
                const updatedStore = await Store.findByIdAndUpdate(
                    storeId,
                    { $push: { ongoingBookings: savedBooking._id } },
                    { new: true }
                );
    
                // 업데이트 결과 확인
                console.log("updatedStore:", updatedStore);
    
                if (!updatedStore) {
                    console.error(`Store not found for ID: ${storeId}`);
                    throw new Error(`Store not found for ID: ${storeId}`);
                } else {
                    // ongoingBookings 필드에 id가 잘 들어갔는지 확인
                    console.log("updatedStore.ongoingBookings:", updatedStore.ongoingBookings);
                }
            }
    
            return savedBooking;
        } catch (error) {
            console.error("Error Creating a booking:", error);
            throw {
                status: 500,
                message: `Error Creating a booking: ${error.message}`,
                stack: error.stack,
            };
        }
    }
    
    

    // //예약한 것 시작 
    // async startBooking(bookingId) {
    //     try {
    //         // Booking 찾기
    //         const booking = await Booking.findById(bookingId);
    //         if (!booking) {
    //             throw { status: 404, message: '요청서를 찾을 수 가 없습니다.' };
    //         }
    
    //         // 예약 진행 중 상태로 변경
    //         booking.inProgress = true; // inProgress를 true로 변경
    //         booking.stauts = '아이가 집에서 출발했습니다.'; // progress를 초기 상태로 설정
    
    //         // 변경 사항 저장
    //         await booking.save();
    
    //         return { message: '요청이 성공적으로 시작되었습니다.', booking };
    //     } catch (error) {
    //         throw {
    //             status: 500,
    //             message: `요청을 시작하는 데 문제가 발생했습니다: ${error.message}`,
    //             stack: error.stack,
    //         };
    //     }
    // }

    //진행상태 업데이트
    async updateProgess(bookingId, status){
        try{
            const updatedBooking = await Booking.findByIdAndUpdate(
                bookingId,
                {
                    inProgress: true,
                    stauts: status,
                },
                { new: true } // 업데이트된 문서 반환
            );
    
            // 변경 사항 저장
            await updatedBooking.save();
    
            return { message: '요청서가 성공적으로 업데이트 되었습니다.', updatedBooking };
        }catch(error){
            throw {
                status: 500,
                message: `요청서를 업데이트하는데 문제가 발생했습니다.: ${error.message}`,
                stack: error.stack,
            };
        }
    }
    
    async CancelBooking(CancelBookingDTO) {
        try {
            const { bookingId } = CancelBookingDTO;
    
            // 예약 찾기
            const booking = await Booking.findById(bookingId);
            if (!booking) {
                throw { status: 404, message: '예약을 찾을 수 없습니다.' };
            }
    
            // 예약 삭제
            await Booking.findByIdAndDelete(bookingId);
    
            return { message: '예약이 취소되었습니다.' };
        } catch (error) {
            throw {
                status: 500,
                message: `요청을 취소하는데 문제가 발생했습니다.: ${error.message}`,
                stack: error.stack,
            };
        }
    }
    
    async getBookingHistory(userId) {
        try {
            if (!userId) {
                throw { status: 400, message: 'User ID is required' };
            }
    
            // 사용자 검색
            const user = await User.findById(userId).populate('ongoingBookings doneBookings');
            if (!user) {
                throw { status: 404, message: 'User not found' };
            }
    
            // 예약 내역 반환
            return {
                ongoingBookings: user.ongoingBookings,
                doneBookings: user.doneBookings,
            };
        } catch (error) {
            throw {
                status: 500,
                message: `Error Getting the booking history: ${error.message}`,
                stack: error.stack,
            };
        }
    }
    

    // async getProgress(){
    //     try{

    //     }catch(error){
    //         throw{
    //             status: 500,
    //             message: `Error Getting the booking history: ${error.message}`,
    //             stack: error.stack, 
    //         }
    //     }
    // }


}

module.exports = new UserService();
