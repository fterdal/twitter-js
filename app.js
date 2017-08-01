const chalk = require('chalk');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const socketio = require('socket.io');

const tweetBank = require('./tweetBank');
const routes = require('./routes');

const server = app.listen(3000);
const io = socketio.listen(server);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routes(io) );
app.use(express.static('public'));

// Nunjucks Config
app.set("view engine","html");
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

app.use('/', routes);
