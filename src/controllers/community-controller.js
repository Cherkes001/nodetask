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

  async community(req, res) {
    const data = await this.communityService.community(req);
    res.send({
      success: true,
      data,
    });
  }

  async communityList(req, res) {
    const data = await this.communityService.communityList(req);
    res.send({
      success: true,
      data,
    });
  }
}
module.exports = CommunityController;
