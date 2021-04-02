const express = require('express');
const router = new express.Router();
const User = require('../models/user')

router.get('', (req, res) => {
    res.render('index.hbs', {
        title: 'VaneJewels',
    });
});

router.get('/produtos', (req, res) => {
    res.render('produtos.hbs', {
        title: 'VaneJewels',
    });
});



module.exports = router;