'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

require('../strategy/jwt.strategy')(passport);

const GoodsAndService = require('../models/goodsAndServices.model');

router.route('/')
  .get(passport.authenticate('jwt', { session: false }), (req, res) => {
    GoodsAndService
      .find()
      .then(goodsAndServices => {
        res.json(goodsAndServices.map(goodsAndService => {
          return {
            id: goodsAndService._id,
            name: goodsAndService.name,
            expand:goodsAndService.expand, 
            description:goodsAndService.description, 
            type:goodsAndService.type, 
            isCollection:goodsAndService.isCollection, 
            cost:goodsAndService.cost, 
            weight:goodsAndService.weight,
          };
        }));
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ message: "Internal server error" });
      });
  });

  module.exports = router;