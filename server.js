'use strict';

console.log('yassss our first sever!');

const {response} = require('express');
// ***** REQUIRES ***** similar to imports for frontend
const express = require('express');

require('dotenv').config();

const cors = require('cors');

let data = require('./data/weather.json');

// ***** ONCE WE BRING IN EXPRESS WE CALL IT TO CREATE THE SERVER *****
// ***** app === server *****
const app = express();

// ***** MIDDLEWARE - CORS *****
app.use(cors());

// ***** PORT THE SERVER WILL RUN ON *****
const PORT = process.env.PORT || 3002; // Designates the port

app.listen(PORT, () => console.log(`We are running on port ${PORT}!`));

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

app.get('/city', (request, response, next) => {
  try {
    let queriedLocation = request.query.city_name;

    response.status(200).send(`You are looking for ${queriedLocation}.`);
  } catch (error) {
    next(error);
  }
});


// ***** CATCH ALL - BE AT THE BOTTOM AND SERVE AS A 404 ERROR MESSAGE *****

app.get('*', (request, response) => {
  response.status(404).send('This route is not available.');
});

// ***** ERROR HANDLING - PLUG AND PLAY CODE FROM EXPRESS DOCS *****
app.use((error, request, response, next) => {
  response.status(500).send(error.message);
});
