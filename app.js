const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const clienteController = require('./controllers/clienteController'); 
const documentacao = require('./doc/doc');

app.get('/', async (req, res) => documentacao.getDocumentacao(req,res));

app.get('/clientes', async (req, res) => clienteController.listarClientes(req, res));

app.post('/clientes/cadastrar', async (req, res) => clienteController.cadastrarCliente(req, res));

app.get('/clientes/:idCliente', async (req, res) => clienteController.listarCliente(req, res));

app.delete('/clientes/deletar/:idCliente', async (req, res) => clienteController.deletarCliente(req, res));

app.put('/clientes/atualizar', async (req, res) => clienteController.editarCliente(req, res));

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});