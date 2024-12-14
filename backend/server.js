const express = require('express');
const cors = require('cors'); // CORS 추가
const app = express();

const UserService = require('./apis/services/UserService'); 
const StoreService = require('./apis/services/StoreService');

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // MongoDB 연결 성공 로그
        await UserService.seedUsers();
        await StoreService.seedStores();
        console.log('MongoDB 연결 성공!');
    } catch (error) {
        // MongoDB 연결 실패 로그
        console.error('MongoDB 연결 실패:', error.message);
        process.exit(1); // 연결 실패 시 서버 종료
    }
};

// MongoDB 연결 상태 로그 출력
mongoose.connection.on('connected', () => {
    console.log('Mongoose가 MongoDB에 연결되었습니다.');
});

mongoose.connection.on('error', (err) => {
    console.error('Mongoose 연결 에러:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose 연결이 끊어졌습니다.');
});

// 데이터베이스 연결 실행
connectDB();

// 포트 설정
const PORT = 5173;

// CORS 설정 미들웨어 추가
app.use(cors()); // 모든 도메인에서의 요청 허용

// JSON 요청 본문 파싱을 위해 middleware 추가
app.use(express.json());

// 모든 요청 로깅 미들웨어
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - Body: ${JSON.stringify(req.body)}`);
    next();
});

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 컨트롤러 연결
const bookingsController = require('./apis/controllers/UserController');
app.use('/api', bookingsController); // "/api/bookings" 경로로 연결

const StoreController = require('./apis/controllers/StoreController');
app.use('/api', StoreController); // "/api/stores" 경로로 연결

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
