const mongoose = require('mongoose');

const Community = mongoose.model('Community', {
  name: String,
  image: String,
  type: String,
  //sub_count: Number,
  //post_count: Number,

  communityUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCommunity',
  },
});
module.exports = Community;
