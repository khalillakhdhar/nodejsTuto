// importation express et mongoose
const express = require('express');
const mongoose = require('mongoose');
// création de app express
const app=express()
mongoose.connect('mongodb+srv://protechgabes:iQYVAUCyL9sZ7Aez@cluster0.hfjjthx.mongodb.net/events', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB Connected…'))
    .catch(err => console.log(err));

const port = 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));

