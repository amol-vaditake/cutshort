const mongoose = require('mongoose');

(async function () {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect('mongodb://127.0.0.1:27017/cutshort');
    console.log('Database connected successfully');
  } catch (err) {
    throw new Error('database failed to connect', err);
  }
})();
