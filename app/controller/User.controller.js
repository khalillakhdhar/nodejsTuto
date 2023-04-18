/**
 * méthode de crud sans express de l'instance de user avec findById
 */
const User = require('../model/User.model');
const mongoose = require('mongoose');
exports.createUser=(user)=>{
    User.create(user).then((data)=>{ // create est une méthode de mongoose qui permet de créer une instance de User

        console.log(data);
    }).catch((err)=>{
        console.log(err);
    }
    );
}