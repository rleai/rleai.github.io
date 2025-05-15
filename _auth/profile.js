const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// 创建数据库连接
const db = new sqlite3.Database(path.join(__dirname, '../data/members.db'));

// 创建成员信息表
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        github_id TEXT UNIQUE,
        name TEXT NOT NULL,
        title TEXT NOT NULL,
        email TEXT NOT NULL,
        research TEXT NOT NULL,
        education TEXT NOT NULL,
        publications TEXT,
        bio TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
});

// 验证规则
const validationRules = {
    name: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s]{2,20}$/,
        message: '姓名长度应在2-20个字符之间，只能包含中文、英文和空格'
    },
    title: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s]{2,50}$/,
        message: '职称长度应在2-50个字符之间，只能包含中文、英文和空格'
    },
    email: {
        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: '请输入有效的邮箱地址'
    },
    research: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s,，]{2,100}$/,
        message: '研究方向长度应在2-100个字符之间'
    },
    education: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s,，]{2,200}$/,
        message: '教育背景长度应在2-200个字符之间'
    },
    publications: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s,，.。]{0,500}$/,
        message: '发表论文长度不能超过500个字符'
    },
    bio: {
        pattern: /^[\u4e00-\u9fa5a-zA-Z\s,，.。]{10,1000}$/,
        message: '个人简介长度应在10-1000个字符之间'
    }
};

// 验证函数
function validateData(data) {
    const errors = {};
    
    for (const [field, rule] of Object.entries(validationRules)) {
        if (field === 'publications') {
            // 发表论文是可选的
            if (data[field] && !rule.pattern.test(data[field])) {
                errors[field] = rule.message;
            }
        } else {
            // 其他字段是必填的
            if (!data[field] || !rule.pattern.test(data[field])) {
                errors[field] = rule.message;
            }
        }
    }
    
    return Object.keys(errors).length === 0 ? null : errors;
}

// 中间件：检查用户是否已认证
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).json({ error: '未登录' });
};

// 获取成员信息
router.get('/api/profile', isAuthenticated, (req, res) => {
    const githubId = req.user.id;
    
    db.get('SELECT * FROM members WHERE github_id = ?', [githubId], (err, row) => {
        if (err) {
            return res.status(500).json({ error: '数据库错误' });
        }
        res.json(row || {});
    });
});

// 更新成员信息
router.post('/api/profile', isAuthenticated, (req, res) => {
    const { name, title, email, research, education, publications, bio } = req.body;
    const githubId = req.user.id;

    // 验证数据
    const errors = validateData(req.body);
    if (errors) {
        return res.status(400).json({ error: '数据验证失败', details: errors });
    }

    const sql = `
        INSERT INTO members (github_id, name, title, email, research, education, publications, bio)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(github_id) DO UPDATE SET
            name = excluded.name,
            title = excluded.title,
            email = excluded.email,
            research = excluded.research,
            education = excluded.education,
            publications = excluded.publications,
            bio = excluded.bio,
            updated_at = CURRENT_TIMESTAMP
    `;

    db.run(sql, [githubId, name, title, email, research, education, publications, bio], function(err) {
        if (err) {
            return res.status(500).json({ error: '保存失败' });
        }
        res.json({ message: '保存成功', id: this.lastID });
    });
});

// 获取所有成员信息（仅管理员可见）
router.get('/api/members', isAuthenticated, (req, res) => {
    // TODO: 添加管理员权限检查
    db.all('SELECT * FROM members ORDER BY created_at DESC', (err, rows) => {
        if (err) {
            return res.status(500).json({ error: '获取成员列表失败' });
        }
        res.json(rows);
    });
});

module.exports = router; 