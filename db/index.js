const sql = require('mysql2');

const db = sql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node-practice',
});

module.exports = db.promise();
