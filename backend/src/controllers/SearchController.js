const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos devs em um raio de 10km
        // Filtrar por tecnologias
        // console.log(request.query);
        const { latitude, longitude, techs } = request.query;

        techsArray = parseStringAsArray(techs); 
        // console.log(techsArray);

        const devs = await Dev.find({
           techs: {  // aqui cabem vários filtros
               $in: techsArray  //o que tem dentro do array do banco. O que rola é que $in é um operador do mongoDB."Mongo operators"
           }     
        });

        return response.json({ devs});
    }
}