const mongoose = require('mongoose');

const app = require('./app');
const mongoConfig = require('./services/mongoService');

mongoose.connect(mongoConfig.uris, mongoConfig.options)
  .then(() => console.log('successfully connected to mongodb'))
  .catch(() => console.log('error connecting to mongodb'));

app.listen(process.env.PORT || 3333, () => {
  console.log('Server running');
});
