var express = require('express');
var router = express.Router();
var schemas = require('../models/schemas.js');

/* GET home page. */
router.get('/', async(req, res, next) => {
  let movies = schemas.movies;

  let moviesResult = await movies.find({}).exec((err, moviesData) => {
    if (moviesData) {
      res.render('index', {title:'Netflix Clone', data:moviesData, email:''});
    }
  });
});

router.post('/signup', async(req, res) => {
  var em = req.body.emailInput;

  let signup = schemas.signup;
  let signupExist = await signup.findOne({email:em}).exec( async(err, result) => {
    if (!result) {
        let newEmail = new schemas.signup({email:em});
        let saveEmail = await newEmail.save( (err, emailResult) => {});
    }
  });

  let movies = schemas.movies;
  let moviesResult = await movies.find({}).exec((err, moviesData) => {
    if (moviesData) {
      res.render('index', {title:'Netflix Clone', data:moviesData, email:em});
    }
  });
});

module.exports = router;
