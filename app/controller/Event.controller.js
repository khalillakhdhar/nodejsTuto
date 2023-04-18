/**
 * méthode de crud sans express de l'instance de event avec findById
 */
 const Event = require('../model/Event.model');
 const mongoose = require('mongoose');
 exports.createEvent=(event)=>{
     Event.create(event).then((data)=>{ // create est une méthode de mongoose qui permet de créer une instance de Event
 
         console.log(data);
     }).catch((err)=>{
         console.log(err);
     }
     );
 }