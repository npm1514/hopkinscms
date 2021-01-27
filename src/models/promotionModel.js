const mongoose = require('mongoose');

  var promotionSchema = new mongoose.Schema({
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
      // possible validator
    },
    active: {
      type: Boolean,
    },
    date: {
      type: String,
      required: true
    },

    time: {
      type: String,
      required: true
    }

    // user: {type: mongoose.Schema.Types.ObjectId, ref: "users"}
  });

  module.exports = mongoose.model('promotions', promotionSchema);