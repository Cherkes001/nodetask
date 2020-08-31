const router = require('express').Router();
const communityController = require('./../../controllers/community-controller');
const communitycontroller = new communityController();

router.post('/community/create', async (req, res, next) => {
  return communitycontroller.createCommunity(req, res, next);
});

router.get('/community/list', async (req, res) => {
  return communitycontroller.communityList(req, res);
});

router.get('/community', async (req, res) => {
  return communitycontroller.community(req, res);
});

module.exports = router;
