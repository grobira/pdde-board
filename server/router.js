const router = require('express').Router();

const people = ['geddy', 'neil', 'alex'];

router.get('/', (req, res) =>{
    res.render('index', {people});
})

module.exports = router;