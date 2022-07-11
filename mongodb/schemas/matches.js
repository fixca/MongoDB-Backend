const mongoose = require('mongoose');
const { Schema } = mongoose;

const matchSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    players: {
        type: Array,
        required: true
    },
    winners: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model('matches', matchSchema);