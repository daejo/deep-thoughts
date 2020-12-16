const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'https://protected-tundra-83653.herokuapp.com/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

module.exports = mongoose.connection;
