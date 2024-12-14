// server.js
const express = require('express');
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

        //MongoDB 연결 성공 로그
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

const PORT = 8000;

// JSON 요청 본문 파싱을 위해 middleware 추가
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// 서버 실행
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(express.json());
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - Body: ${JSON.stringify(req.body)}`);
    next();
});

const bookingsController = require('./apis/controllers/UserController');
app.use('/api', bookingsController); // "/api/bookings" 경로로 연결

const StoreController = require('./apis/controllers/StoreController');
app.use('/api', StoreController);