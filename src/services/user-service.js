const UserModel = require('./../db/models/user');
const UserCommunity = require('../db/models/userCommunity');
class UserService {
  constructor() {}

  async subscribe(req) {
    //console.log(req.header('userId'));
    const sub = new UserCommunity({
      users: req.header('userId'),
      communities: req.body.communityId,
    });
    await sub.save();
    //return req.body; - /!\
  }

  async genUser(req) {
    const usr = new UserModel({
      
    });
    await usr.save();
  }


}

module.exports = UserService;
