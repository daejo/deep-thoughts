const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://deep-thoughts:dwakin2008@cluster0-shard-00-00.5srma.mongodb.net:27017,cluster0-shard-00-01.5srma.mongodb.net:27017,cluster0-shard-00-02.5srma.mongodb.net:27017/deep-thoughts?ssl=true&replicaSet=atlas-sbs2rx-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

module.exports = mongoose.connection;
