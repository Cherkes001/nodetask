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

  async communityList(userId) {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    // const communities = await CommunityModel.find({})
    //   .populate('communityUser')
    //   .exec();
    // return communities;
    // const result = communities.map((community) => {
    //   const isFollowCheck =
    //     userId === community.communityUser.user ? true : false;
    //   return {
    //     id: community._id,
    //     image: community.image,
    //     type: community.type,
    //     //followersAmount: followers,
    //     postsAmount: getRandomInt(10000),
    //     isFollow: isFollowCheck,
    //   };
    // });
    // return result;

    const communities = await CommunityModel.find({}).exec();
    const result = await Promise.all(
      communities.map(async (community) => {
        const followersAmount = await UserCommunity.countDocuments({
          community: community._id,
        }).exec();
        const isFollow = await UserCommunity.exists({
          user: userId,
          community: community._id,
        });

        return {
          id: community._id,
          name: community.name,
          image: community.image,
          type: community.type,
          followersAmount,
          postsAmount: getRandomInt(10000),
          isFollow,
        };
      })
    );
    return result;
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
