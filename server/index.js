const express = require( 'express');
const bodyparser = require('body-parser');
const router = require('./router');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './client/views')
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./client/static'));

app.use('/', router);

app.listen(process.env.PORT || 8080, () => {
  console.log('App running on http://localhost:8080');
});
