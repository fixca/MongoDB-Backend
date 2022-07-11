const matchlog = require('./matchlog');

const express = require('express');
const router = express.Router();

router.use('/matchlog', matchlog);

module.exports = router;