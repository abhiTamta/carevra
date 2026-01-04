const express = require('express');
const cors = require('cors');
const { applySecurity } = require('./middleware/security');

const app = express();

// Middlewares
applySecurity(app);
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', require('./routes/index'));

module.exports = app;
