const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const fs = require('fs');

router.get('/users/:name', function (req, res) {
  let tweets = tweetBank.find({name: req.params.name});
  res.render( 'index', { tweets: tweets } );
});

router.get('/tweets/:id', function (req, res) {
  let tweets = tweetBank.find({id: req.params.id});
  console.log(req.params);
  // console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  // console.log(tweets);
  res.render( 'index', { tweets: tweets } );
});

module.exports = router;
