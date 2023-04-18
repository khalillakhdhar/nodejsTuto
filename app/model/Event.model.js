// mongoose schema pour Event avec titre lieu date fin  description et une réference vers user avec son identifiant
// 3 lignes
 const mongoose = require('mongoose');
    const Schema = mongoose.Schema;
    const EventSchema = new Schema({
        titre: {
            type: String,
            required: true
        },
        lieu: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        fin: {
            type: Date,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    });
    module.exports = Event = mongoose.model('event', EventSchema);