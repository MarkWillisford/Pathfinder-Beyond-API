'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const TradeGoods = require('../models/tradeGoods.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    TradeGoods
    .find()
    .then(tradeGoods => {
      res.json(tradeGoods.map(tradeGood => {
        return {
          id: tradeGood._id,
          name: tradeGood.name,
          expand:tradeGood.expand,
          description:tradeGood.description,
          cost:tradeGood.cost,
          item:tradeGood.item,
        };
      }));
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    });
  });

  module.exports = router;