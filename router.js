const router = require('express').Router();
const ejs = require('ejs');

const people = ['geddy', 'neil', 'alex'];

router.get('/', (req, res) =>{
    const html = ejs.render('<%= people.join(", "); %>', {people: people});
    res.send(html);
})

module.exports = router;