'use strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample Route
app.get('/', (req, res) => {
    res.send('Welcome to Morevision POS App!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
