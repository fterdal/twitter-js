const chalk = require('chalk');
const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
  console.log(chalk.blue(req.method), chalk.red(req.originalUrl));
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/news', (req, res) => {
  res.send('BREAKING NEWS!');
});

const PORT = 3000;

app.listen(3000, () => {
  console.log(`Listening on PORT ${PORT}`);
});
