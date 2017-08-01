const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

module.exports = function (io) {
  router.get('/users/:name', function (req, res) {
    let tweets = tweetBank.find({name: req.params.name});
    res.render( 'index', { tweets: tweets,
      showForm: true,
      name: req.params.name } );
    });

    router.get('/tweets/:id', function (req, res) {
      let tweets = tweetBank.find({id: req.params.id});
      res.render( 'index', { tweets: tweets } );
    });

    router.get('/', function (req, res) {
      let tweets = tweetBank.list();
      res.render( 'index', { tweets: tweets, showForm: true } );
    });

    router.post('/tweets', function (req, res) {
      const name = req.body.name;
      const text = req.body.text;
      tweetBank.add(name, text);
      io.sockets.emit('newTweet', { name: name, text: text });
      res.redirect('/');
    });

  return router;
};
