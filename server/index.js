const express = require('express');
const bodyparser = require('body-parser');
const router = require('./routes/router');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './client/views')
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./client/static'));

app.use('/', router);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pdde',  { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to database.');
  });

app.listen(process.env.PORT || 8080, () => {
  console.log('App running on http://localhost:8080');
});

