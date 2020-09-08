const UserCommunity = require('../db/models/userCommunity');

class UserService {
  constructor() {}

  async subscribe(communityId, userId) {
    console.log(communityId);
    console.log(userId)
    const check = await UserCommunity.exists(
      { user: userId },
      { community: communityId }
    );
    const subscribe = new UserCommunity({
      user: userId,
      community: communityId,
    });

    if (check == true) {
      //return 'Record Exists';
    } else {
      await subscribe.save();
      //return 'Recorded';
    }
  }
}

module.exports = UserService;
