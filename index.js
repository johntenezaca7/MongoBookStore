const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());

const Genre = require('./models/genres');
const Book = require('./models/book');

mongoose.connect(keys.mongoURI);

const db = mongoose.connection;

app.get('/', (req, res) => {
    res.send('Please use api/books or api/genre')
})

app.get('/api/genres', (req, res) => {
    Genre.getGenres((err, genres) => {
        if(err){
            throw err
        }
        res.send(genres)
    })
});


app.get('/api/books', (req, res) => {
    Book.getBooks((err, books) => {
        if(err){
            throw err
        }
        res.send(books)
    })
});


app.listen(port, () => {
    console.log('Running on port: ' + port)
})