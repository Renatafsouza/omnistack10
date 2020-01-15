const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// 5 métodos possíveis:
// index: quando quero mostrar uma LISTA, 
// show: quando quero mostrar um ÚNICO resultado, 
// store: quando quero CRIAR ,
// update: ATUALIZAR, 
// destroy: DELETAR
//


module.exports = {
    async index(request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store(request, response) {  // store é o nome da function. Uma named function. esses parâmetros são padrão (request, response), mas ele usou só o response para retornar. A requisiçao vem do proprio front.
        // return response.send('Hello World');
        const {  github_username, techs, latitude, longitude } = request.body; //techs vem da tela mesmo.
    
        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`); //usar crase permite inserir variáveis nesse meio
    
            const { name = login, avatar_url, bio } = apiResponse.data; //desestruturação com sobreposição em "name = login"
        
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username,  //não preciso passar o nome pois são iguais.
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            })
        }       
        // console.log(name,avatar_url, bio, github_username);
        return response.json(dev);
    }


    // EXERCÍCIO EXTRA: 
//    async update(){} --> para name, avatar, techs ou bios e não deixar atualizar o id.
//    asunc destroy(){}   
// 

};