const router = require('express').Router();
const communityController = require('./../../controllers/community-controller');
const communitycontroller = new communityController();

router.post('/community/create', async (req, res) => {
  return communitycontroller.createCommunity(req, res);
});

router.get('/community/list', async (req, res) => {
  return communitycontroller.communityList(req, res);
});

router.get('/community', async (req, res) => {
  return communitycontroller.community(req, res);
});

router.get('/community-users', async (req, res) => {
  return communitycontroller.communityUsers(req, res);
});

router.get('/user-community', async (req, res) => {
  return communitycontroller.userCommunity(req, res);
});

module.exports = router;
