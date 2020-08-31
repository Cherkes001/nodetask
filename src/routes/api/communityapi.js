const router = require('express').Router();
const communityController = require('./../../controllers/community-controller');
const communitycontroller = new communityController();

router.get('/writecom', async (req, res, next) => {
  return communitycontroller.createCommunity(req, res, next);
});

module.exports = router;
