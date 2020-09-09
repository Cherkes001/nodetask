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

    const isFollow = async (userId, communityId) => {
      return await UserCommunity.exists({
        user: userId,
        community: communityId,
      });
    };

    //const followers =

    const communities = await CommunityModel.find({}).exec();
    const result = await Promise.all(
      communities.map(async (community) => {
        return {
          id: community._id,
          image: community.image,
          type: community.type,
          followersAmount: followers,
          postsAmount: getRandomInt(10000),
          isFollow: await isFollow(userId, community._id),
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
