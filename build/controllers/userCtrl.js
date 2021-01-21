"use strict";

var UserModel = require('./../models/userModel');

module.exports = {
  login: function login(req, res, next) {
    console.log(req.user);
    res.send(req.user);
  },
  getMe: function getMe(req, res) {
    if (!req.user) {
      return res.send();
    }

    UserModel.findById(req.user._id).exec(function (err, result) {
      if (err) {
        return res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  logout: function logout(req, res) {
    var id = req.user.id;
    req.logout();
    console.log(id + " logged out");
    res.send(id + " logged out");
  },
  read: function read(req, res) {
    UserModel.find(req.query).exec(function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  },
  update: function update(req, res) {
    UserModel.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  }
};