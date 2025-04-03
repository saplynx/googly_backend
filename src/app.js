const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const axios = require('axios');

const LiveDataService = require('./services/live-data-service');
LiveDataService.StartService(5);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    return res.send(req.originalUrl);
});



module.exports = app;

