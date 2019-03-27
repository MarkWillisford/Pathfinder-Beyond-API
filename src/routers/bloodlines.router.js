'use strict';

const express = require('express');			
const passport = require('passport');

require('../strategy/jwt.strategy')(passport);
const router = express.Router();

const Bloodline = require('../models/bloodline.model');

router.route('/')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
        //.get((req, res) => {
        Bloodline
            .find()
            .then(bloodlines => {
                res.json(bloodlines.map(bloodline => {
                    return {
                        id: bloodline._id,
                        type: bloodline.type,
                        name: bloodline.name,
                        description: bloodline.description,
                        classSkill: bloodline.classSkill,
                        bonusSpells: bloodline.bonusSpells,
                        bonusFeats: bloodline.bonusFeats,
                        bloodlineArcana: bloodline.bloodlineArcana,
                        bloodlinePowers: bloodline.bloodlinePowers,
                    };
                }));
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            });
        });

module.exports = router;