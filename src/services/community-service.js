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

  async userCommunity(userId) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const followCommunities = await UserCommunity.find({ user: userId })
      .populate('community')
      .exec();

    const result = await Promise.all(
      followCommunities.map(async (userCommunity) => {
        const followersAmount = await UserCommunity.countDocuments({
          community: userCommunity.community._id,
        }).exec();
        return {
          id: userCommunity.community.get('_id'),
          name: userCommunity.community.get('name'),
          image: userCommunity.community.get('image'),
          type: userCommunity.community.get('type'),
          followersAmount,
          postsAmount: getRandomInt(10000),
        };
      })
    );
    return result;
  }
}
module.exports = CommunityService;
