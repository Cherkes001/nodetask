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
}

module.exports = OtherController;
