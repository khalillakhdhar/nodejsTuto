// mongoose schema pour User avec nom prenom email password , telephone et adresse sur
// 3 lignes
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    nom: {
        type: String,
        required: true
    },
    prenom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        //unique: true
    },
    password: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    adresse: {
        type: String,
        required: true
    }
});
module.exports = User = mongoose.model('user', UserSchema);
