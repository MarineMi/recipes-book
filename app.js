require("@babel/register");
require('dotenv').config();

const express = require("express");
const router = require('express').Router();
const config = require("./config/config");

const app = express();

const PORT = process.env.PORT ?? 3000;
config(app);

const MainRoute = require('./routes/views/main.routes');
const AuthRoute = require('./routes/views/auth.routes');
const AuthApiRoute = require('./routes/api/auth.routes');
const FavoritesRoute = require('./routes/views/favorie.routes');


app.use('/favorites', FavoritesRoute);
app.use('/api/auth', AuthApiRoute);
app.use('/auth', AuthRoute);
app.use('/', MainRoute);


app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
