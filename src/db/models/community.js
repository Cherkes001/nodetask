const mongoose = require('mongoose');

const Community = mongoose.model('Community', {
  name: String,
  image: String,
  type: String,

  communityUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCommunity',
  },
});
module.exports = Community;
