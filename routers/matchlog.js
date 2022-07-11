const express = require('express');
const router = express.Router();

const { matches } = require('../mongodb');

router.post('/', async (req, res) => {
    try {

        const { key, id, size, type, map, players, winners } = req.body;

        if (!key ||
            !id ||
            !size ||
            !type ||
            !map ||
            !players ||
            !winners) {
            console.log(req.body);
            res.status(422).send({
                'status': 1,
                'result': 'Some required queries are missing.'
            });
            return;
        }

        if (key != process.env.COCOA_KEY) {
            res.status(401).send({
                'status': 1,
                'result': 'API key is invalid.'
            });
            return;
        }
        await matches.create({
            id: id,
            size: size,
            type: type,
            map: map,
            players: players,
            winners: winners
        });
        res.status(201).send({
            'status': 0
        });
        return;
    }
    catch (e) {
        res.status(500).send({
            'status': 1,
            'result': 'Internal server error.'
        });
        console.log(`An error has occurred!\nQuery: ${req.body}`);
        console.error(e);
        return;
    }
});

module.exports = router;