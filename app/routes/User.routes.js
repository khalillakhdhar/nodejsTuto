module.exports=app=>{
    const users = require('../controller/UserRest.controller');
   // const events = require('../controller/EventRest.controller');
    const router = require('express').Router();
    // create user
    router.post('/users', users.createUser);
    // get all users
    router.get('/users', users.findAllUsers);
   
    app.use('/api', router);
}