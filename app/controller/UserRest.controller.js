// import User.model.js
const User = require('../model/User.model');
const mongoose = require('mongoose');
// create user with res,req
exports.createUser = (req, res) => {
   
   const user = new User(req.body);

    user.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
    
}
// get all users with res,req
exports.findAllUsers = (req, res) => {
    User.find().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
}
// get user by id with res,req
exports.findUserById = (req, res) => {
    User.findById(req.params.id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
}
// update user by id with res,req
exports.updateUserById = (req, res) => {
User.findByIdAndUpdate(req.params.id, req.body).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });
    // delete user by id with res,req
exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params.id).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err.message);
    });

}