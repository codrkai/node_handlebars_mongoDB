var mongoose = require('mongoose');
var schema = mongoose.Schema;

// movies
let moviesSchema = new schema({
    title: {type:String, required:true},
    img: {type:String, required:true},
    desc: {type:String, required:true},
    yearReleased: {type:String},
    filmLocation: {type:String},
    entryDate: {type:Date, default:Date.now},
    genre: {type:schema.Types.ObjectId, ref:'genre'}
});

// genre
let genreSchema = new schema({
    name: {type:String, required:true}
});

// signup
let signupSchema = new schema({
    email: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

let movies = mongoose.model('movies', moviesSchema, 'movies');
let genre = mongoose.model('genre', genreSchema, 'genre');
let signup = mongoose.model('signup', signupSchema, 'signup');
let mySchemas = {'movies':movies, 'genre':genre, 'signup':signup};

module.exports = mySchemas;