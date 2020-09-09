const UserCommunity = require('../db/models/userCommunity');

class UserService {
  constructor() {}

  async subscribe(communityId, userId) {
    const check = await UserCommunity.exists({
      user: userId,
      community: communityId,
    });
    const subscribe = new UserCommunity({
      user: userId,
      community: communityId,
    });
    console.log(communityId);
    if (communityId === undefined) {
      return 'Error, communityId not defined';
    } else {
      if (check) {
        await UserCommunity.deleteOne({ user: userId, community: communityId });
        return 'Record deleted';
      } else {
        await subscribe.save();
        return 'Recorded';
      }
    }
  }
}

module.exports = UserService;
