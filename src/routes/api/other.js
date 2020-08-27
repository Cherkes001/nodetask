const router = require('express').Router();
const HelloController = require('./../../controllers/other-controller');
const helloController = new HelloController();

router.get('/hello', async (req, res, next) => {
  return await helloController.hello(req, res, next);
});

router.get('/get-config', async (req, res, next) => {
  return await helloController.config(req, res, next);
});

router.get('/learn', function (req, res) {
  console.log(req.query.queryParam);
   res.send({
      success: true,
      data: req.query.queryParam,
    });
});

router.get('/learn/path/:pathParam', function (req, res) {
  if (req.params.pathParam) {
    res.send({
      success: true,
      data: req.params.pathParam,
    });
  } else {
    res.send({
      success: false,
    });
  }
});

router.post('/store-text', async (req, res, next) => {
  return await helloController.sttext(req, res, next);
});

module.exports = router;
