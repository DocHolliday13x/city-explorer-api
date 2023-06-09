# City Explorer API

* *Author*: Ryan Eastman

* *Version*: 1.0.0

## Project Overview

* *Description*: City Explorer is a Code Fellows 301 Lab exercise in which we will create our first true Full-Stack application. city-explorer is the front-end application, and city-explorer-api will be our backend application that will be our server for our application. To build our API, we will utilize a library called Express.js as well as Node.js. We will be using classes to simplify bulky data. After we have built our server, we will deploy it to Render and connect our React App on Netlify to the back-end at Render.

* *Current State of Development*: Initial Setup

## Lab 07

Today I will be creating a back-end server for our City Explorer project. Today's operation will be a little different. I created the repo on GitHub along with a README file. I then cloned the repo down to my local machine, and used the terminal command "npm init" to create a new project (this one). I used "npm install express/dotenv/cors" to add some more files, then manually generated and populated everything else. After my initial setup is complete (which is being done on a branch named setup rather than on the main), I will create a branch to commence my work on. The order of operations for today is layed out on a Trello board.

* Link to Trello Board: https://trello.com/b/YJhepSUm/city-explorer
* Name of Feature: Back-End Server
* Estimate of Time Needed to Complete: Probably 6 hours
* Start Time: 1400 21 MAR 2023
* Finish Time: 1630 22 MAR 2023
* Actual Time to Completion: 14 hours

## Lab 08

For today's assignment, I have to use two additional APIs to display current weather data by date, as well as list current movies playing in the city that is searched by the user.

* Link to Trello Board: https://trello.com/b/YJhepSUm/city-explorer
* Name of Feature: Using weather API to display accurate/dynamic weather data, using movie database api to display list of available movies by city location
* Estimate of Time Needed to Complete: 15 hours
* Start Time: 22 MAR 2023 1630
* Finish Time: 23 MAR 2023 1700
* Actual Time to Completion:

## Lab 09

Today's goal is to refactor the front and back end of my application. I don't know if refactoring will make it run smoother, but it sure cleaned up my code nicely. Everything is more readable.

* Link to Trello Board: https://trello.com/b/YJhepSUm/city-explorer
* Name of Feature: Refactor - Modularize the back-end codebase.
* Estimate of Time Needed to Complete: 15 hours
* Start Time: 23 MAR 2023 1130
* Finish Time: 23 MAR 2023 1700
* Actual Time to Completion: < 6 hrs

## Lab 10

Today's goal is to utilize cache to maximize API accessibility. In order to achieve this, I will create an object in my server code to hold the API response data for any proxied queries. That way my back end can first check to see if there is already information about a given city and, if there is, send the data directly from the storage object, without concerns of being rate-limited by the API providers.

* Link to Trello Board: https://trello.com/b/YJhepSUm/city-explorer
* Name of Feature: Cache
* Estimate of Time Needed to Complete: 6 hours
* Start Time: 24 MAR 2023 1130
* Finish Time: 24 MAR 2023 1500
* Actual Time to Completion: 3.5 hours

## Getting Started

## Architecture

* Labs 06 - 09
  * ![WRCC1](./assets/WRCC1.png)

* Lab 10
  * ![WRRC2](./assets/WRRC2.png)

## Change Log

21 March 2023 1400 - Initial Setup Commenced
22 March 2023 1630 - Lab 07 Submitted (incomplete)
22 March 2023 1630 - Lab 08 Commenced
22 March 2023 0000 - Lab 08 Submitted (incomplete)
23 March 2023 1130 - Lab 09 Commenced
23 March 2023 1700 - Lab 09 Completed
24 March 2023

## Credit and Collaborations

Thank You, Reece Renninger for carrying me through this project.
Thank You, Nicholas Brown, Stephen Levesque and Andrew Vreeland for providing moral support and motivation.
Thank You, Audrey for always fixing my issues and making me feel like I am not an imposter.
