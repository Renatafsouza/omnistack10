const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express(); // aqui ele cria essa var que representa toda a aplicação. Facilita a hora de expor tudo isso.

// MongoDB (Não-relacional) O BD fica hospedado na nuvem.
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-uyid4.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.json());  // sempre tem que vir antes das routes. Cadastra o tipo de objeto a trafegar para todas as requisições
app.use(routes);

app.listen(3333); //configura a porta

