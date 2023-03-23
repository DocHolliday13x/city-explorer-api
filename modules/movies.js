'use strict';

const axios = require('axios');

async function getMoviesData(request, response, next) {

  try {

    let keywordFromFrontEnd = request.query.searchQuery;

    let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIES_API_KEY}&language=en-US&page=1&include_adult=false&query=${keywordFromFrontEnd}`;

    let movieResults = await axios.get(url);

    // *** GROOM DATA TO SEND TO FRONT-END ***
    let mappedMoviesDataToSend = movieResults.data.results.map(movie => {
      return new Movies(movie);
    });

    response.status(200).send(mappedMoviesDataToSend);
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
