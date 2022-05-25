const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1/rockademy_db',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(() => console.log('connected to mongodb'))
.catch(err => {
  console.error(err.name, err.message);
  // TODO: can send an email regarding mongoDB failure
})
;

module.exports = mongoose.connection;
