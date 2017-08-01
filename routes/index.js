const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const fs = require('fs');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
  // let css = fs.readFileSync('../public/stylesheets/style.css');
  res.sendFile('/code/fullstack/junior/twitter-js/public/stylesheets/style.css');
});

module.exports = router;
