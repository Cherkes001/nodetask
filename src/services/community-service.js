const CommunityModel = require('../db/models/community');
const UserCommunity = require('../db/models/userCommunity');

class CommunityService {
  constructor() {}

  async createCommunity(item) {
    const community = new CommunityModel({
      ...item,
    });
    return await community.save();
  }

  async communityList() {
    return CommunityModel.find({});
  }

  async community(communityId) {
    return CommunityModel.findById(communityId).exec();
  }

  async communityUsers(communityId) {
    const data = await UserCommunity.find({ community: communityId })
      .populate('user')
      .exec();
    const result = data.map((value) => {
      return value.user;
    });
    return result;
  }
}
module.exports = CommunityService;
