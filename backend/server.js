const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'booking'
});

// Endpoint testowy
app.get('/api/lokale', (req, res) => {
    connection.query('SELECT * FROM lokale', (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Błąd bazy danych' });
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Backend działa na porcie ${port}`);
});
