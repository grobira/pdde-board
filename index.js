const express = require( 'express');
const bodyparser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const router = require('./router');

const app = express();
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.use('/', router);

app.listen(3000, () => {
  console.log('Listening to port 3000');
});
