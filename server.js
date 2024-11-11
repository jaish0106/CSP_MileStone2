const express = require('express');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    db.query('SELECT content FROM Messages LIMIT 1', (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).send('Database query failed: ' + err.message);
        }
        
        console.log('Query Results:', results);  // Log the results to see what's retrieved
        
        const message = results[0] ? results[0].content : 'Hello World';
        res.send(`<h1>Hello World - ${message}</h1>`);
    });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
});



