const router = require('express').Router();
const UserController = require('./../../controllers/user-controller');
const usercontroller = new UserController();

router.post('/userapi/subscribe', async (req, res) => {
  return usercontroller.subscribe(req, res);
});

module.exports = router;
