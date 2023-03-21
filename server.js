'use strict';

console.log('yassss our first sever!');

const { response } = require('express');
// ***** REQUIRES ***** similar to imports for frontend
const express = require('express');

require('dotenv').config();

// ***** ONCE WE BRING IN EXPRESS WE CALL IT TO CREATE THE SERVER *****
// ***** app === server *****
const app = express();

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



// ***** CATCH ALL - BE AT THE BOTTOM AND SERVE AS A 404 ERROR MESSAGE *****

app.get('*', (request, response) => {
  response.status(404).send('This route is not available.');
});


