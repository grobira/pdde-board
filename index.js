const express = require( 'express');
const bodyparser = require('body-parser');
const router = require('./router');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './views')
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('./static'));

app.use('/', router);

app.listen(process.env.PORT || 8080, () => {
  console.log('test')
  console.log('Listening to port 8080');
});
