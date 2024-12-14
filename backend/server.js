// server.js
const express = require('express');
const app = express();
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
