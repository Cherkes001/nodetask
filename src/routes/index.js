const express = require('express');
const router = express.Router();

router.use('/api', require('./api/index.js'));
router.use('/static', express.static('src/static'));

module.exports = router;
