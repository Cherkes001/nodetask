const CommunityService = require('./../services/community-service');

class CommunityController {
  constructor() {
    this.communityService = new CommunityService();
  }

  async createCommunity(req, res) {
    const item = req.body;
    const data = await this.communityService.createCommunity(item);

    res.send({
      success: true,
      data,
    });
  }

  async community(req, res) {
    const communityId = req.headers.communityid;
    const data = await this.communityService.community(communityId);

    res.send({
      success: true,
      data,
    });
  }

  async communityUsers(req, res) {
    const communityId = req.headers.communityid;
    const data = await this.communityService.communityUsers(communityId);

    res.send({
      success: true,
      data,
    });
  }

  async communityList(req, res) {
    const userId = req.headers.userid;
    const data = await this.communityService.communityList(userId);

    res.send({
      success: true,
      data,
    });
  }
}
module.exports = CommunityController;
