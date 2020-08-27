const router = require('express').Router();
const HelloController = require('./../../controllers/other-controller');
const helloController = new HelloController();

router.get('/hello', async (req, res, next) => {
  return await helloController.hello(req, res, next);
});

router.get('/get-config', async (req, res, next) => {
  return await helloController.config(req, res, next);
});

router.get('/learn', (req, res) => {
  return helloController.learn(req, res);
});

router.get('/learn/path/:pathParam', (req, res, next) => {
  return helloController.pathParam(req, res, next);
});

router.post('/store-text', async (req, res, next) => {
  return await helloController.sttext(req, res, next);
});

module.exports = router;
