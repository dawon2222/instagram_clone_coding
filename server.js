const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname+'/인스타그램 클론코딩'));

const router = express.Router();

router.get('/login', (req, res) => {
  res.sendFile(__dirname+'/인스타그램 클론코딩/login.html');
});

router.get('/', (req, res) => {
  res.sendFile(__dirname+'/인스타그램 클론코딩/main.html');
});

app.use('/', router);

app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 포트에서 실행 중입니다.`);})