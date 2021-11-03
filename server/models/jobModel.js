const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Database
const MONGO_URI = 'mongodb+srv://qwe:qwe123@cluster0.mlsmi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'job'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch(err => console.log(err));

//Schema
const jobSchema = new Schema({
  title: {type: String, required: true},
  location: {type: String, required: true},
  company: {type: String, required: true},
  status: {type: String, default: 'Considering'},
  salary: {type: Number, default: 0},
  notes: String,
});

const Job = mongoose.model('job', jobSchema);


// exports all the models in an object to be used in the controller
module.exports = {Job};
