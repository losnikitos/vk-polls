const express = require('express');
const router = express.Router();
const { Poll, Option, Answer, User } = require('../models');
const bodyParser = require('body-parser');

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

router.post('/vote/:optionID', (req, res) => {
  const user = req.user;
  console.log('user', user);
  res.send(200);
  // Answer.create({})
});

router.post('/poll', bodyParser.text(), (req, res) => {
  const [question, ...options] = req.body.split('\n');
  Poll.create(
    {
      question,
      options: options.map(option => ({ text: option }))
    },
    {
      include: [Option]
    }
  ).then(() => {
    res.send(200);
  });
});

module.exports = router;
