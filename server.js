require('dotenv').config();
const express = require('express');
const path = require('path');
const authRouter = require('./_auth/github');
const profileRouter = require('./_auth/profile');

const app = express();
const PORT = process.env.PORT || 4000;

// 中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 静态文件服务
app.use(express.static(path.join(__dirname, '_site')));

// 认证路由
app.use(authRouter);
app.use(profileRouter);

// 主页路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '_site', 'index.html'));
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 