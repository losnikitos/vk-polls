const express = require('express');
const router = express.Router();
const {Poll} = require('../models');

router.get('/polls', (req, res) => {
    Poll.findAll().then(polls => {
        res.send(polls)
    })
});

module.exports = router;
