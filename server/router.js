const router = require('express').Router();

router
.get('/', (req, res) =>{
    res.render('index');
})
.get('/about', (req, res) =>{
    res.render('about');
})
.get('/colabore', (req, res) =>{
    res.render('colabore');
})
.get('/pdde', (req, res) =>{
    res.render('pdde');
})

module.exports = router;