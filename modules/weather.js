'use strict';

const axios = require('axios');

let cache = {};

// TODO: need to create a key for the data I am going to store
// TODO: if the thing exists AND within a valid timeframe... send data from cache
// TODO: if the thing does NOT exist... call API and cache that return from the API

async function getWeatherData(req, res, next) {

  try {

    let lat = req.query.lat;
    let lon = req.query.lon;
    let key = `lat:${lat} lon: ${lon}-Weather`; // key = Seattle-weather

    if (cache[key] && (Date.now() - cache[key].timestamp) < 4.32e+7) {
      console.log('Cache was hit!');

      res.status(200).send(cache[key].data);

    } else {

      console.log('Weather data is not in the cache!');

      let url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&days=7&lat=${lat}&lon=${lon}`;

      let weatherData = await axios.get(url);

      let mappedWeatherDataToSend = weatherData.data.data.map(dailyForecast => {
        return new Forecast(dailyForecast);
      });

      // *** Build It Into Cache ***
      cache[key] = {
        data: mappedWeatherDataToSend,
        timestamp: Date.now()
      };

      res.status(200).send(mappedWeatherDataToSend);

    }

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
