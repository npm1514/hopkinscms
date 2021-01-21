"use strict";

var PromotionModel = require('./../models/promotionModel');

module.exports = {
  create: function create(req, res) {
    var promotion = new PromotionModel(req.body);
    promotion.save(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  read: function read(req, res) {
    PromotionModel.find(req.query).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  readOne: function readOne(req, res) {
    PromotionModel.findById(req.params.id).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    PromotionModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  destroy: function destroy(req, res) {
    PromotionModel.findByIdAndRemove(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};