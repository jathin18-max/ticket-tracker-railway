const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        ca: fs.readFileSync('./ca.pem')
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to Aiven MySQL:', err.message);
        return;
    }

    console.log('Connected to Aiven MySQL successfully!');
});

module.exports = connection;