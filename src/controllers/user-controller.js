const UserService = require('./../services/user-service');

class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async subscribe(req, res) {
    const communityId = req.body.communityId;
    const userId = req.headers.userid || res.getHeader('userid');
    const data = await this.userService.subscribe(communityId, userId);
    
    res.send({
      success: true,
      data,
    });
  }
}

module.exports = UserController;
