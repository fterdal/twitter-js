const express = require('express');
const app = express();

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
