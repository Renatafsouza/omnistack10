const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_schema: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {
        type: PointSchema,
        index: '2dsphere' // para sair em 2 eixos; Tá em alguma documentação na vida.
    }
});

module.exports = mongoose.model('Dev', DevSchema);