const chalk = require('chalk');
const nunjucks = require('nunjucks');
const express = require('express');
const app = express();

// nunjucks configuration
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true, express: app});

app.use('*', (req, res, next) => {
  console.log(chalk.blue(req.method), chalk.red(req.originalUrl));
  next();
});

app.get('/', (req, res) => {
  // res.send('Home Page');
  nunjucks.render('index.html', locals, function (err, output) {
    res.send(output);
  });
});

app.get('/news', (req, res) => {
  res.send('BREAKING NEWS!');
});

const PORT = 3000;
// Listeneing to server
app.listen(3000, () => {
  console.log(`Listening on PORT ${PORT}`);
});
