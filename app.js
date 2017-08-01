const chalk = require('chalk');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();

// Nunjucks Config
app.set("view engine","html");
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

// Sample Data
var locals = {
  title: 'An Example',
  people: [
    { name: 'Gandalf'},
    { name: 'Frodo' },
    { name: 'Hermione'}
  ]
};


app.use('*', (req, res, next) => {
  console.log(chalk.blue(req.method), chalk.red(req.originalUrl));
  next();
});

app.get('/', (req, res) => {
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.get('/news', (req, res) => {
  res.send('BREAKING NEWS!');
});

const PORT = 3000;
// Listeneing to server
app.listen(3000, () => {
  console.log(`Listening on PORT ${PORT}`);
});
