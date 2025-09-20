const express = require("express");
const router = express.Router();
const db = require("../db");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "No token" });
  const token = auth.split(" ")[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    console.log(payload);
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

router.get("/", authMiddleware, async (req, res) => {
  const q =
    "SELECT id, username, email, fullname, created_at FROM members WHERE id=$1";
  const { rows } = await db.query(q, [req.user.id]);
  if (rows.length === 0)
    return res.status(404).json({ error: "User not found" });
  res.json({ user: rows[0] });
});

router.put("/", authMiddleware, async (req, res) => {
  try {
    const { fullname, username } = req.body;
    if (!username) return res.status(400).json({ error: 'username is null'});
    // 1) เช็คว่า username ถูกใช้แล้วหรือยัง (ยกเว้น user ตัวเอง)
    const checkQuery = `SELECT id FROM members WHERE username = $1 AND id != $2`;
    const checkResult = await db.query(checkQuery, [username, req.user.id]);

    if (checkResult.rows.length > 0) {
      return res.status(400).json({ error: "Username นี้ถูกใช้แล้ว" });
    }

    // 2) อัปเดตข้อมูล
    const updateQuery = `
      UPDATE members 
      SET username = $1, fullname = $2, updated_at = now() 
      WHERE id = $3 
      RETURNING id, username, email, fullname
    `;
    const { rows } = await db.query(updateQuery, [
      username,
      fullname,
      req.user.id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "ไม่พบผู้ใช้" });
    }

    res.json({ user: rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "เกิดข้อผิดพลาดในเซิร์ฟเวอร์" });
  }
});

module.exports = router;
