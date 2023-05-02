module.exports=app=>{
    const users = require('../controller/UserRest.controller');
   // const events = require('../controller/EventRest.controller');
    const router = require('express').Router();
    // create user
    router.post('/users', users.createUser);
    // get all users
    router.get('/users', users.findAllUsers);
    // get user by id
    router.get('/users/:id', users.findUserById)
    // update user by id
    router.put('/users/:id', users.updateUserById);
    // delete user
    router.delete('/users/:id', users.deleteUserById);
   
    app.use('/api', router);
}