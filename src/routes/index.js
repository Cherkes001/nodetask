const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', '*');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type, *');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

router.use('/api', require('./api/index.js'));
router.use('/static', express.static('src/static'));

module.exports = router;
