const router = require('express').Router();
const bodyParser = require('body-parser');
const UserModel = require('./../../db/models/user');
const mongoose = require('mongoose');

router.use(bodyParser.json());

router.use('/', async (req, res, next) => {
  const userid = req.headers.userid;
  const isObjectId = mongoose.Types.ObjectId.isValid(userid);

  if (isObjectId) {
    const checkUserExists = await UserModel.exists({ _id: userid });
    if (checkUserExists) {
      res.header('userid', userid);
    } else {
      return res.send({ success: false, error: 'ObjectId invalid' });
    }
  } else {
    let user = await UserModel.create({});
    res.header('userid', user._id);
  }
  next();
});

router.use('/dbhandle', require('./dbhandle.js'));
router.use('/other', require('./other.js'));
router.use('/collections', require('./communityapi.js'));
router.use('/users', require('./userapi.js'));

module.exports = router;
