const mongoose = require('mongoose');
const Community = require('./community');

const UserCommunity = mongoose.model('UserCommunity', {
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  communities: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Community',
  },
});

module.exports = UserCommunity;
