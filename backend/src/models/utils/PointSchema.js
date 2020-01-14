const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({ //tudo está na documentação do Mongoose
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    },
});

module.exports = PointSchema;
