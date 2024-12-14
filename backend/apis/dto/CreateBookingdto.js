class CreateBookingDTO {
    constructor(userId, storeId, bookingTime, feature, childName, childGender, expectedArrivalTime) {
        if (!userId) throw new Error('userId is required');
        if (!storeId) throw new Error('storeId is required');
        if (!bookingTime || typeof bookingTime !== 'string') throw new Error('유효한 bookingTime을 입력하세요 (예: "3:00pm")');
        if (!expectedArrivalTime || typeof expectedArrivalTime !== 'string') throw new Error('유효한 expectedArrivalTime을 입력하세요 (예: "3:30pm")');
        if (!childName || typeof childName !== 'string') throw new Error('이름에는 문자열만 입력해주세요');
        if (!childGender || !['남아', '여아', '남자', '여자'].includes(childGender)) {
            throw new Error('아이의 성별을 입력해주세요. "Male", "Female", "남아", "여아" 중 하나');
        }

        this.userId = userId;
        this.storeId = storeId;
        this.bookingTime = this.parse12HourTime(bookingTime, 'bookingTime');
        this.expectedArrivalTime = this.parse12HourTime(expectedArrivalTime, 'expectedArrivalTime');
        this.feature = feature || 'N/A';
        this.childName = childName;
        this.childGender = childGender;
    }

    // 12시간 형식을 Date 객체로 변환
    parse12HourTime(timeStr, fieldName) {
        const [time, modifier] = timeStr.split(/(am|pm)/i); // "3:00pm" => ["3:00", "pm"]
        const [hours, minutes] = time.split(':').map(Number);

        if (isNaN(hours) || isNaN(minutes)) {
            throw new Error(`잘못된 시간 형식 입니다: ${fieldName}`);
        }

        let adjustedHours = hours % 12; // 12시간 형식의 시간 처리
        if (modifier.toLowerCase() === 'pm') {
            adjustedHours += 12;
        }

        const now = new Date(); // 오늘 날짜 기준으로 생성
        now.setHours(adjustedHours, minutes, 0, 0); // 시간 설정
        return now;
    }
}

module.exports = CreateBookingDTO;
