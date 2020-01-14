const { Router } = require('express');
const DevController = require('./controllers/DevController');

const routes = Router();

// Métodos HTTP: GET, POST, PUT, DELETE  --- post: para cadastrar.

// Tipos de parâmetros:
// . Query Params: req.query (Filtros, ordenação, paginação) . São visíveis na url. Ex.: url/?clientes 
// . Route Params:  request.params (Identificar um recurso na alteração, remoção) .São os params da requisição. Não tem nome e aparecem na url do mesmo jeito.
// . Body: request.body (Dados para criação ou edição de um registro)

routes.post('/devs', DevController.store);

module.exports = routes;