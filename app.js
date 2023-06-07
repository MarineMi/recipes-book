require('@babel/register');

const express = require('express');
const path = require('path');
const ssr = require('./middleware/ssr');

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(ssr);

app.listen(PORT, () => {
  console.log(`Этот сервер умирает на ${PORT} порту`);
});
