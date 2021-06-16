const axios = require('axios');
const Forecast = require('../models/weather.model');
require('dotenv').config();


const weatherController = (req,res) => {
  let latitude = req.query.lat;
  let longitude = req.query.lon;
  axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.WEATHER_KEY}&lat=${latitude}&lon=${longitude}`).then(response => {
    const arrOfDays = [];
    response.data.data.map(item => {
      let description = `Low of ${item.low_temp}, high of ${item.high_temp} with ${item.weather.description}`;
      let dayWeather = new Forecast(item.valid_date, description);
      arrOfDays.push(dayWeather);
    });
    res.send(arrOfDays);
  }).catch(error => {
    res.send('Error hahahahahaha  ', error.message);
  });
};



module.exports = weatherController;
