const chalk = require('chalk');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();

const tweetBank = require('./tweetBank');
const routes = require('./routes');
app.use('/', routes);

// Nunjucks Config
app.set("view engine","html");
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);

// app.get('/', (req, res) => {
//   const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });
//
// app.get('/tweets', (req, res) => {
//   // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   const tweets = tweetBank.list();
//   res.render('index', {title: "List of Tweets", people: tweets});
// });
//
// app.post('/tweets', (req, res) => {
//   // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//   const newTweet = { name: "Finn Ashish", content: "Here's a successful POST!" };
//   tweetBank.add(newTweet.name, newTweet.content);
//   res.render( 'index', {title: 'Hall of Fame', people: people} );
// });

const PORT = 3000;
// Listeneing to server
app.listen(PORT, () => { } );
