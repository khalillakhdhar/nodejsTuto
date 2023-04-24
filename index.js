// importation express et mongoose
const express = require('express');
const mongoose = require('mongoose');
// importation de body-parser
const bodyParser = require('body-parser');



// importation des models

const User = require('./app/model/User.model');
const Event = require('./app/model/Event.model');
// importation des controllers
const userController = require('./app/controller/User.controller');
const eventController = require('./app/controller/Event.controller');
// création de app express
const app=express()
// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect('mongodb+srv://protechgabes:iQYVAUCyL9sZ7Aez@cluster0.hfjjthx.mongodb.net/events', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected…'))
    .catch(err => console.log(err));
// création des instance de User et Event
const user = new User({
    nom: 'Lakhdhar',
    prenom: 'Khalil',
    email: 'KL@gmail.hfjjthx.mongodb',
    password: 'test123',
    telephone: '20345678',
    adresse: 'Gabés'
});
const event = new Event({
    titre: 'event1',
    lieu: 'Tunis',
    date: '2021-01-01',
    fin: '2021-01-02',
    description: 'event1',
    user: user._id
});
// findUsers
//userController.findUsers();Z
// authenticateUser
//userController.authenticate('KL@gmail.hfjjthx.mongodb','test123');





//userController.createUser(user);
//eventController.createEvent(event);

// sauvegarde des instances dans la base de données
/*user.save().then((data) => {
    console.log('user saved'+data)}).catch(err => {
        console.log(err)
        });
event.save().then((data) => {
    console.log('event saved'+data)}).catch(err => {
        console.log(err)
        });
        */
require('./app/routes/User.routes')(app);
const port = 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

