const CommunityService = require('./../services/community-service');

class CommunityController {
  constructor() {
    this.communityService = new CommunityService();
  }

  async createCommunity(req, res, next) {
    const data = await this.communityService.createCommunity(req);
    res.send({
      success: true,
      data,
    });
    next();
  }
}
module.exports = CommunityController;
