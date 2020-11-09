const mongoConfig = {
  uris: process.env.MONGO_URI || '',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

module.exports = mongoConfig;
