const mongoose = require('mongoose');

const User = mongoose.model('User', {
  sub_list: String,

  userCommunity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCommunity',
  },
});

module.exports = User;
