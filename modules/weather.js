'use strict';

const axios = require('axios');

async function getWeatherData(req, res, next) {

  try {
    let lat = req.query.lat;
    let lon = req.query.lon;
    // console.log(request.query);

    res.status(200).send(mappedWeatherDataToSend);
  } catch (error) {
    next(error);
  }
}

// *** CLASS TO GROOM BULKY DATA ***
class Forecast {
  constructor(weatherObj) {
    this.date= weatherObj.date;
    this.description= weatherObj.description;
    this.lat= weatherObj.lat;
    this.lon= weatherObj.lon;
  }
}

module.exports = getWeatherData;
