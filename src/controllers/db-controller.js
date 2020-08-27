const DBService = require('./../services/db-service');

class DBController {
  constructor() {
    this.dbService = new DBService();
  }

  async readb(req, res, next) {
    const data = await this.dbService.getCats(req);
    res.send({
      success: true,
      data,
    });
  }
}

module.exports = DBController;
