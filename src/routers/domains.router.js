'use strict';

const express = require('express');
const passport = require('passport');

require('../strategy/jwt.strategy')(passport);
const router = express.Router();

const Domain = require('../models/domain.model');

router.route('/')
    .get(passport.authenticate('jwt', { session: false }), (req, res) => {
      Domain
            .find()
            .then(domains => {
                res.json(domains.map(domain => {
                    return {
                        id: domain._id,
                        type: domain.type,
                        druidAvailable: domain.druidAvailable,
                        name: domain.name,
                        description: domain.description,
                        grantedPowers: domain.grantedPowers,
                        domainSpells: domain.domainSpells,
                        subdomains: domain.subdomains,
                    };
                }));
            })
            .catch(err => {
                console.error(err);
                res.status(500).json({ message: "Internal server error" });
            });
        });

module.exports = router;