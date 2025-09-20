const express = require('express');
const router = express.Router();
const db = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'devsecret';

// register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password} = req.body;
    if (!username || !email || !password) return res.status(400).json({ error: 'Missing fields' });
    const hashed = await bcrypt.hash(password, 10);
    const q = `INSERT INTO members (username, email, password_hash)
               VALUES ($1,$2,$3) RETURNING id, username, email`;
    const { rows } = await db.query(q, [username, email, hashed]);
    res.json({ user: rows[0] });
  } catch (err) {
    if (err.code === '23505') return res.status(409).json({ error: 'username or email already exists' });
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // ใช้ email ใน query
    const q = 'SELECT * FROM members WHERE email = $1';
    const { rows } = await db.query(q, [email]); 

    if (rows.length === 0)
      return res.status(401).json({ error: 'Invalid email' });

    const user = rows[0];

    // ตรวจสอบรหัสผ่าน
    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid password' });

    // สร้าง token
    const payload = { id: user.id, username: user.username, email: user.email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.json({
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error'});
  }
});


module.exports = router;
