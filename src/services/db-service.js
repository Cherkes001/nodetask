const CatModel = require('./../db/models/cat');
class DBService {
  constructor() {}

  async getCats(req) {
    console.log(req.query.page);
    const options = {
      limit: +req.query.limit || 5,
      page: req.query.page || 1,
    };
    return CatModel.find({})
      .limit(options.limit)
      .skip(options.page * options.limit - options.limit);
  }

  async writedb(req, res) {
    const kitty = new CatModel({ name: req.body.record });
    kitty.save();
    return req.query.queryParam;
  }
}
module.exports = DBService;
