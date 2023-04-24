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
// méthode simulaire de crud sans express de l'instance de user avec findById et update 
// méthode de findByEmailAndPassword
exports.findUsers=()=>{
    User.find().then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });
}
    exports.findUserById=(id)=>{
        User.findById(id).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    exports.authenticate=(email,password)=>{
        User.findOne({email:email,password:password}).then((data)=>{
            //console.log(data);
            if(data){
                console.log('user found');
            }else{
                console.log('user not found');
            }
        }).catch((err)=>{
            console.log(err);
        });
    }
    exports.updateUser=(id,user)=>{
        User.findByIdAndUpdate(id,user).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
    exports.deleteUser=(id)=>{
        User.findByIdAndDelete(id).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        });
    }
