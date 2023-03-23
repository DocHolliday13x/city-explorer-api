'use strict';

const axios = require('axios');

async function getWeatherData(req, res, next) {

  try {
    let lat = req.query.lat;
    let lon = req.query.lon;
    // console.log(request.query);

    let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&days=7&lat=${lat}&lon=${lon}`;

    let weatherData = await axios.get(url);

    let mappedWeatherDataToSend = weatherData.data.data.map(dailyForecast => {
      return new Forecast(dailyForecast);
    });

    res.status(200).send(mappedWeatherDataToSend);
  } catch (error) {
    next(error);
  }
}

// *** CLASS TO GROOM BULKY DATA ***
class Forecast {
  constructor(weatherObj) {
    this.date= weatherObj.valid_date;
    this.description= weatherObj.weather.description;
    this.lat= weatherObj.lat;
    this.lon= weatherObj.lon;
  }
}

module.exports = getWeatherData;
