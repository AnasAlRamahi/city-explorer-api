const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();

const port= process.env.PORT;

const weatherController = require('./controllers/weather.controller');
const movieController = require('./controllers/movie.controller');

app.get('/weather', weatherController);

app.get('/movies', movieController);

app.listen(port);
