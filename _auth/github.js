const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const session = require('express-session');

const router = express.Router();

// GitHub OAuth配置
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const CALLBACK_URL = process.env.CALLBACK_URL || 'http://localhost:4000/auth/github/callback';

// Session配置
router.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Passport配置
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// GitHub策略配置
passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: CALLBACK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    // 这里可以添加额外的用户信息处理逻辑
    return done(null, profile);
  }
));

// 认证路由
router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] })
);

router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/profile');
  }
);

// 登出路由
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// 中间件：检查用户是否已认证
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/auth/github');
};

// 受保护的路由示例
router.get('/profile', isAuthenticated, (req, res) => {
  res.json(req.user);
});

module.exports = router; 