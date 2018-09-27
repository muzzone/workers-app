const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contactInformation: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  },
  salary: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  }
});
workerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('workers', workerSchema);