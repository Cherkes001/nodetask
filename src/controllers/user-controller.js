const UserService = require('./../services/user-service');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async subscribe(req, res) {
    const data = await this.userService.subscribe(req);
    res.send({
      success: true,
      data,
    });
  }

  async genUser(req, res) {
    const data = await this.userService.genUser(req);
    res.send({
      success: true,
      data,
    });
  }
}

module.exports = UserController;
