const mongoose = require('mongoose');

const Postschema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//(model_name, shema_name)
module.exports = mongoose.model('Posts', Postschema);
