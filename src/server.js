const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

/* Middlewares */
// CORS
const cors = require('cors');
const {CLIENT_ORIGIN} = require('./config/main.config.js');

/* app.use(
    cors({
        origin: CLIENT_ORIGIN
    })
); */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.get('/api/*', (req, res) => {
res.json({ok: true});
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = {app};

