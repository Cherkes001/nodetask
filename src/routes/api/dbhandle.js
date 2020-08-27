const router = require('express').Router();
const DBController = require('./../../controllers/db-controller.js');
const dbController = new DBController();

const CatModel = require('./../../db/models/cat');
router.post('/writedb', function (req, res, next) {
  const kitty = new CatModel({ name: req.body.record });
  kitty.save();
  res.send({
    succes: true,
    data: req.body.record,
  });
  next();
});

router.get('/readb', async (req, res, next) => {
  return dbController.readb(req, res, next);
});

module.exports = router;
