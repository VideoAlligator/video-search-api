# video-search-api

RESTful API with Node.js + Express + Typescript + Mongoose

## Pre-requisite

1. Install `Node.js` and `npm`
2. Install `MongoDB` and setup a local database (the default is `mongodb://localhost:27017/test`). For Mac OS, use `brew services start mongodb-community@4.4`
3. Change the local env variable in `.env` file to local/cloud database. Copy `.env.example` to your own `.env`. In local, `MONGODB_URI` is `mongodb://localhost:27017/test`. In Heroku, `MONGODB_URI` has been set to a [Mongo Atlas Database](https://www.mongodb.com/cloud/atlas).

To test and debug, please install a MongoDB GUI (e.g. Robo 3T) and Postman.

## Setup

`npm install` will download all relevant node modules.

`npm run dev` will run the program and reload automatically if code changes are applied.

## Deployment

Use the `main` branch to deploy: `git push heroku main`, deploy to [Heroku](https://dashboard.heroku.com/apps).
