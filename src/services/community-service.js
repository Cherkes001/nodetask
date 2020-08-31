const CommunityModel = require('../db/models/community');
const { collection } = require('../db/models/community');
class CommunityService {
  constructor() {}

  async createCommunity(req) {
    const com = new CommunityModel({
      name: req.body.name,
      picture: req.body.picture,
      category: req.body.category,
      sub_count: req.body.sub_count,
      post_count: req.body.post_count,
    });
    com.save();
    return req.body;
  }

  async communityList(req) {
    return await CommunityModel.find({});
  }

  async community(req) {
    const id = req.query.id;
    return await CommunityModel.findById(id).exec();
  }
}
module.exports = CommunityService;
