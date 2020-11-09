const mysql = require('mysql');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

const connectToDatabase = async () => {
    try {
        await conn.connect(() => {
            console.log('Database conected');
        })
    } catch (error) {
        console.log(erro)
    }
}

connectToDatabase();

module.exports = {
    conn: conn
}
