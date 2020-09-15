const router = require('express').Router();
const communityController = require('./../../controllers/community-controller');
const communitycontroller = new communityController();

router.post('/', async (req, res) => {
  return communitycontroller.createCommunity(req, res);
});

router.get('/', async (req, res) => {
  return communitycontroller.communityList(req, res);
});

router.get('/:communityId', async (req, res) => {
  return communitycontroller.community(req, res);
});

router.get('/community-users', async (req, res) => {
  return communitycontroller.communityUsers(req, res);
});

module.exports = router;
