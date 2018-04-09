const express = require('express');
const router = express.Router();
const { Poll, Option, Answer, User } = require('../models');

router.get('/polls', (req, res) => {
  Poll.findAll({
    include: [
      {
        model: Option,
        include: [
          {
            model: Answer,
            include: [
              {
                model: User,
                as: 'user'
              }
            ]
          }
        ]
      }
    ]
  }).then(polls => {
    res.send(polls);
  });
});

module.exports = router;
