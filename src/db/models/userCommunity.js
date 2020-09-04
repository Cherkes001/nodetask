const mongoose = require('mongoose');

const UserCommunity = mongoose.model(
  'UserCommunity',
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
      community: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Community',
      },
    },
    { strict: false }
  )
);

module.exports = UserCommunity;
