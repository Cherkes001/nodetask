const fs = require('fs');
class OtherService {
  constructor() {}

  async getHelloData() {
    return 'world';
  }

  async getConfig() {
    return {
      port: 'Server port: ' + process.env.PORT,
      host: 'Server adress is: ' + process.env.HOST,
    };
  }

  async storeText(req) {
    await fs.appendFile('./src/text.txt', req.body.value + '\n', function (
      err
    ) {
      if (err) throw err;
    });
    return req.body.value;
  }
}

module.exports = OtherService;
