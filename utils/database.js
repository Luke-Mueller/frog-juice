const mysql = require('mysql2');

const pool = mysql.createPool({  
  host: "localhost",
  user: 'root',
  database: 'frog_juice',
  password: 'frogjuice'
});

module.exports = pool.promise();