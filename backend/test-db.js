require('dotenv').config();
const { Pool } = require('pg');

console.log(process.env.DATABASE_URL)

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('DB connected! Current time:', res.rows[0]);
  }
  pool.end();
});
