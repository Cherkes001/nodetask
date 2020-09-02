const mongoose = require('mongoose');

const UserCommunity = mongoose.model('UserCommunity', {
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  communities: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
});

module.exports = UserCommunity;
