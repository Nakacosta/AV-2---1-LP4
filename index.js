const express = require("express");
const bodyParser = require("body-parser"); 
const cors = require("cors");
const { validaCpf } = require('./cpf-service')

const app = express();
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));

app.route('/api/cpf/:strCPF').get(validaCpf);

const HOST = 'localhost';
const PORT = 9000;

const httpServer = app.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}`)
});