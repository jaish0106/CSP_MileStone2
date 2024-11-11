const mysql = require('mysql2');  // Make sure you are using mysql2

const db = mysql.createConnection({
    host: '10.63.133.5',       // MySQL server IP
    user: 'web_user',          // MySQL username
    password: 'P@ssw0rd123#',// MySQL password
    database: 'ProjectDB'
});

// Connect to the database and log success or failure
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

// Export the db object so it can be used in server.js
module.exports = db;

