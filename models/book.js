const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    genre:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    author:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
    },
    pages:{
        type: String,
    },
    img_url:{
        type: String,
    },
    buy_url:{
        type: String,
    },
    create_date:{
        type: Date,
        default:Date.now
    }
});

const Book = module.exports = mongoose.model('Book', bookSchema)

//Get Books
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit)
}

//Get Book by Id
module.exports.getBookById = (id, callback) => {
    Book.findById(id, callback)
}
//Add new Book
module.exports.addBook = (book, callback) => {
    Book.create(book,callback )
}

//Update Book

module.exports.updateBook = (id, book, options, callback) => {
    const query = {_id: id};
    const update = { 
        title: book.title,
        genre: book.genre,
        decription: book.description,
        author: book.author,
        publisher: book.publisher,
        pages: book.pages,
        img_url: book.img_url,
        buy_url: book.buy_url 
    } 
    
    Book.findOneAndUpdate(query, update, options,  callback )
}
//delete book
module.exports.deleteBook = (id, callback) => {
    const query = {_id: id};
    
    Book.remove(query,callback )
}
