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

//Get genres
module.exports.getBooks = (callback, limit) => {
    Book.find(callback).limit(limit)
}