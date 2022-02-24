var express = require('express');
var router = express.Router();
var schemas = require('../models/schemas.js');

/* GET users listing. */
router.get('/:id', async(req, res, next) => {
  var id = req.params.id;

  let movies = schemas.movies;
  let movieData = await movies.findOne({_id:id}).populate('genre').exec();
  if (movieData) {
    res.render('movies', {data:movieData});
  } else {
    res.end('Invalid Request');
  }
});

module.exports = router;
