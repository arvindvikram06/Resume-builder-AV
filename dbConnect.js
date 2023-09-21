const mongoose = require('mongoose');

const URL = 'mongodb+srv://vijayprasanth08112004:vijay@cluster0.0ndavcf.mongodb.net/';

mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongo connection SuccessFull');
});

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

