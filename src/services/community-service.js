const CommunityModel = require('../db/models/community');
class CommunityService {
  constructor() {}

  async createCommunity(req) {
    const com = new CommunityModel({
      name: 'Demo Record',
      picture: '/url/pic',
      category: 'Test',
      sub_count: '666',
      post_count: '13',
    });
    com.save();
  }
}
module.exports = CommunityService;
