const router = require('express').Router();
const DBController = require('./../../controllers/db-controller.js');
const dbController = new DBController();

router.post('/writedb', async (req, res, next) => {
  return dbController.writedb(req, res, next);
});

router.get('/readb', async (req, res, next) => {
  return dbController.readb(req, res, next);
});

module.exports = router;
