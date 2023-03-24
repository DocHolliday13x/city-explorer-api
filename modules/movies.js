'use strict';

const axios = require('axios');

let cache = {};

// TODO: need to create a key for the data I am going to store
// TODO: if the thing exists AND within a valid timeframe... send data from cache
// TODO: if the thing does NOT exist... call API and cache that return from the API

async function getMoviesData(request, response, next) {

  try {

    let keywordFromFrontEnd = request.query.searchQuery;

    let key = `${keywordFromFrontEnd}-Movies`; // key = Seattle-movies

    if (cache[key] && (Date.now() - cache[key].timestamp) < 4.32e+7) {
      console.log('Cache was hit!');

    } else {

      console.log('Movie data is not in cache!');
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${keywordFromFrontEnd}`;

      let movieResults = await axios.get(url);

      let mappedMoviesDataToSend = movieResults.data.results.map(movies => {
        return new Movies(movies);
      });

      // *** Build It Into Cache ***
      cache[key] = {
        data: mappedMoviesDataToSend,
        timestamp: Date.now()
      };

      response.status(200).send(mappedMoviesDataToSend);

    }

  } catch (error) {
    next(error);
  }
}


// *** BUILD CLASS TO TRIM DOWN DATA ***
class Movies {
  constructor(movieObj) {
    this.title = movieObj.original_title;
    this.overview = movieObj.overview;
    this.image = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`;
  }
}




module.exports = getMoviesData;
