const chalk = require('chalk');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const tweetBank = require('./tweetBank');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes);
app.use(express.static('public'));

// Nunjucks Config
app.set("view engine","html");
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);

const PORT = 3000;
// Listeneing to server
app.listen(PORT, () => { } );
