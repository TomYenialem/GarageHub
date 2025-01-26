// intaliztation
const mysql = require('mysql2/promise')
const dbconfig={
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password:process.env.PASSWD,
    database: process.env.DATABASE
}

// create connection

const pool = mysql.createPool(dbconfig);

// query function


async function query(sql, params) {
  const [rows, fields] = await pool.execute(sql, params);
  return rows;
}
// Export the query function for use in the application
module.exports = { query };







