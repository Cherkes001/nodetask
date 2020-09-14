const router = require('express').Router();
const bodyParser = require('body-parser');
const UserModel = require('./../../db/models/user');
const mongoose = require('mongoose');

router.use(bodyParser.json());

router.use('/', async (req, res, next) => {
  const userid = req.headers.userid;
  const isObjectId = mongoose.Types.ObjectId.isValid(userid);
  if (!userid || isObjectId) {
    const checkUserExists = await UserModel.exists({ _id: userid });
    if (checkUserExists) {
      res.set({ userid });
    } else {
      let user = await UserModel.create({});
      res.set({ userid: user._id });
    }
    next();
  } else {
    return res.send({ success: false, error: 'ObjectId invalid' });
  }
});

router.use('/dbhandle', require('./dbhandle.js'));
router.use('/other', require('./other.js'));
router.use('/community', require('./communityapi.js'));
router.use('/userapi', require('./userapi.js'));

module.exports = router;
