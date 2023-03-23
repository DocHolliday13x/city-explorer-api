'use strict';

console.log('yassss our first sever!');

// ***** REQUIRES ***** similar to imports for frontend

const express = require('express');
require('dotenv').config();
const cors = require('cors');
const axios = require('axios');
// const moviesData = require('./data/movies.js');

// ***** ONCE WE BRING IN EXPRESS WE CALL IT TO CREATE THE SERVER *****
// ***** app === server *****
const app = express();

// ***** MIDDLEWARE - CORS *****
app.use(cors());

// ***** PORT THE SERVER WILL RUN ON *****
const PORT = process.env.PORT || 3002; // Designates the port


// ***** SERVER START *****
app.listen(PORT, () => console.log(`We are running on port: ${PORT}.`));

// ***** ENDPOINTS *****

// ***** BASE ENDPOINT - PROOF OF LIFE *****
// ***** 1st Argument: string url in quotes ***** request
// ***** 2nd Argument: callback that will execute when that endpoint is reached ***** request

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my server!');
});

app.get('/hello', (request, response) => {
  console.log(request.query);
  let userFirstName = request.query.firstName;
  let userLastName = request.query.lastName;
  // let key = request.query.key;
  // let searchInfo = request.query.q;

  response.status(200).send(`Hello, ${userFirstName} ${userLastName}! Welcome to my server!`);
});

app.get('/weather', async (request, response, next) => {
  try {
    let lat = request.query.lat;
    let lon = request.query.lon;

    let url = `http://api.weatherbit.io/v2.0/forecast/daily?key=${process.env.REACT_APP_WEATHERBIT_API_KEY}&lat=${lat}&lon=${lon}&days=10&units=I`;
    console.log(url);

    let dataToGroom = await axios.get(url);
    console.log(dataToGroom);

    let mappedData = dataToGroom.data.data.map(dailyForcast => new Forecast(dailyForcast));
    console.log(mappedData);

    response.status(200).send(mappedData);
  } catch (error) {
    next(error);
  }
});

app.get('/movies', async (request, response, next) => {
  try {
    // TODO: accept queries
    let keywordFromFrontend = request.query.searchQuery;
    // TODO: build url for axios
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false`;

    let moviesToGroom = await axios.get(url);
    console.log(moviesToGroom);

    // TODO: groom that data and send it to the frontend
    let mappedMovieData = moviesToGroom.data.results.map(localMovies => {
      return new Movies(localMovies);
    });

    response.status(200).send(mappedMovieData);
  } catch (error) {
    next(error);
  }
});

// ***** CLASS TO GROOM BULKY DATA *****
class Forecast {
  constructor(weatherObj){
    // this.city = weatherObj.city_name;
    // this.lat = weatherObj.lat;
    // this.lon = weatherObj.lon;
    this.date = weatherObj.valid_date;
    this.description = weatherObj.weather.description;
  }
}

class Movies {
  constructor(moviesObj){
    this.title= moviesObj.original_title;
    this.overview = moviesObj.overview;
    this.image = `https://image.tmbd.org/t/p/w300${moviesObj.poster_path}`;
  }
}


// ***** CATCH ALL - BE AT THE BOTTOM AND SERVE AS A 404 ERROR MESSAGE *****

app.get('*', (request, response) => {
  response.status(404).send('This page exists only in the ether. Please try another search.');
});

// ***** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS *****
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});
