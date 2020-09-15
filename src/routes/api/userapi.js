const router = require('express').Router();
const UserController = require('./../../controllers/user-controller');
const userController = new UserController();

router.post('/subscribe', async (req, res) => {
  return usercontroller.subscribe(req, res);
});

module.exports = router;
