const mongoose = require('mongoose');

module.exports = async () => {
  mongoose.connect('mongodb://localhost:27017/', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    dbName: 'some-db',
    user: 'mongoadmin',
    pass: 'admin',
  });
};
