const mongoose = require('mongoose');

const User = mongoose.model('User', {
  username: String,

  userCommunity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserCommunity',
  },
});

module.exports = User;
