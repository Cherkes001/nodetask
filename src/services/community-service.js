const CommunityModel = require('../db/models/community');
const UserCommunity = require('../db/models/userCommunity');
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
    await com.save();
  }

  async communityList(req) {
    return CommunityModel.find({});
  }

  async community(req) {
    const id = req.query.id;
    return CommunityModel.findById(id).exec();
  }

  async communityUsers(req) {
    //console.log(req.body.communityId)
    const communityId = req.body.communityId;
    return UserCommunity.find({ communities: communityId })
      .populate('User')
      .exec();
  }
}
module.exports = CommunityService;
