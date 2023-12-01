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

app.get('/vendedores/:idVendedor', async (req, res) => {
  try {
    const idVendedor = req.params.idVendedor;
    const response = await axios.get(`URL_DA_API_EXTERNAR/vendedores/${idVendedor}`);
    
    // Verifica se a resposta tem dados
    if (response.data) {
      const nomeVendedor = response.data.nome;

      console.log(`Nome do vendedor: ${nomeVendedor}`);
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ error: 'Vendedor não encontrado' });
    }
  } catch (error) {
    console.error('Erro ao obter dados do vendedor:', error.message);
    res.status(500).json({ error: 'Erro ao obter dados do vendedor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
