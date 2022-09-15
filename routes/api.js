const express = require('express');
const axios = require('axios').default;
const dotenv = require('dotenv');

const router = express.Router();

dotenv.config();

const fan = process.env.FAN_SERVER;

router.get('/on', (req, res) => {
  axios.get(fan + '/low')
    .then((response) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
});

router.get('/off', (req, res) => {
  axios.get(fan + '/off')
    .then((response) => {
      res.sendStatus(200);
    }).catch((err) => {
      console.log(err);
      res.sendStatus(500);
    })
});

module.exports = router;