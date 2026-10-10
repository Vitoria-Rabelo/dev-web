const mongoose = require('mongoose');

const connectDB = async () => {
  const databaseUrl = process.env.DATABASE || 'mongodb://127.0.0.1:27017/meu_banco';
  await mongoose.connect(databaseUrl, { serverSelectionTimeoutMS: 5000 });
  console.log('MongoDB local conectado.');
};

module.exports = connectDB;