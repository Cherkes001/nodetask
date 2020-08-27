const OtherService = require('./../services/other-service');

class OtherController {
  constructor() {
    this.otherService = new OtherService();
  }

  async hello(req, res, next) {
    const data = await this.otherService.getHelloData();
    res.send({
      success: true,
      data,
    });
  }

  async config(req, res, next) {
    const data = await this.otherService.getConfig();
    res.send({
      success: true,
      data,
    });
  }

  async sttext(req, res, next) {
    const data = await this.otherService.storeText(req);
    res.send({
      success: true,
      data,
    });
    next();
  }

  async pathParam(req, res, next) {
    const data = await this.otherService.pathParam(req);
    res.send({
      success: true,
      data,
    });
  }

  async learn(req, res, next) {
    const data = await this.otherService.learn(req);
    res.send({
      success: true,
      data,
    });
  }
}

module.exports = OtherController;
