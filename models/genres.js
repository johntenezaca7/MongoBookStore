const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default:Date.now
    }
});

const Genre = module.exports = mongoose.model('Genre', genreSchema)

//Get genres
module.exports.getGenres = (callback, limit) => {
    Genre.find(callback).limit(limit)
}

//Add Genre
module.exports.addGenre = (genre, callback) => {
    Genre.create(genre,callback )
}

//Update Genre

module.exports.updateGenre = (id, genre, options, callback) => {
    const query = {_id: id};
    const update = { 
        name: genre.name
    } 
    
    Genre.findOneAndUpdate(query, update, options,  callback )
}

//delete genre
module.exports.deleteGenre = (id, callback) => {
    const query = {_id: id};
    
    Genre.remove(query,callback )
}
