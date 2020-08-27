const router = require('express').Router();
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.use('/dbhandle', require('./dbhandle.js'));
router.use('/other', require('./other.js'));

module.exports = router;