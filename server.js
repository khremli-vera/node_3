const express = require('express');
const app = express();
const filmsRouter = require('./routes/films');

app.use(express.json());

app.use('/', filmsRouter);
app.use('/:id', filmsRouter);

app.listen(3000, '127.0.0.1', function () {
    console.log('Running');
});