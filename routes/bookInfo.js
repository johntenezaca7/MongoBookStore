const Genre = require('../models/genres');
const Book = require('../models/book');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.send('Please use api/books or api/genre')
    })
    

    app.post('/api/genres', (req, res) => {
        const genre = req.body;

        Genre.addGenre(genre, (err, genre) => {
            if(err){
                throw err
            }
            res.send(genre)
        })
    });

    app.put('/api/genres/:_id', (req, res) => {
        const id = req.params._id;
        const genre = req.body;

        Genre.updateGenre(id, genre, {},  (err, genre) => {
            if(err){
                throw err
            }
            res.send(genre)
        })
    });

    app.delete('/api/genres/:_id', (req, res) => {
        const id = req.params._id;
    
        Genre.deleteGenre(id,(err, genre) => {
            if(err){
                throw err
            }
            res.send(genre)
        })
    });

    app.get('/api/genres', (req, res) => {
        Genre.getGenres((err, genres) => {
            if(err){
                throw err
            }
            res.send(genres)
        })
    });

/* -----------------------Books------------------------------------*/

    app.put('/api/books/:_id', (req, res) => {
        const id = req.params._id;
        const book = req.body;

        Book.updateBook(id, book, {},  (err, book) => {
            if(err){
                throw err
            }
            res.send(book)
        })
    });

    app.post('/api/books', (req, res) => {
        const book = req.body;

        Book.addBook(book, (err, book) => {
            if(err){
                throw err
            }
            res.send(book)
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

    app.get('/api/books/:_id', (req, res) => {
        Book.getBookById(req.params._id, (err, book) => {
            if(err){
                throw err
            }
            res.send(book)
        })
    });


    app.delete('/api/books/:_id', (req, res) => {
        const id = req.params._id;
    
        Book.deleteBook(id,(err, book) => {
            if(err){
                throw err
            }
            res.send(book)
        })
    });


}