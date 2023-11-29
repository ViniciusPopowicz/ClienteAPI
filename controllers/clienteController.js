const clienteService = require('../services/clienteService');

class ClienteController {
  async cadastrarCliente(req, res) {
    const { nome, telefone, email } = req.body;

    try {
      const novoCli = await clienteService.criarCliente(nome, telefone, email);
      res.status(201).json(novoCli);
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
      res.status(500).json({ error: 'Ocorreu um erro durante o cadastro do cliente.' });
    }
  }

  async editarCliente(req, res){
    const { idCliente, nome, telefone, email} = req.body;

    try {
        const editarCli = await clienteService.atualizarCliente(idCliente, nome, telefone, email);
        res.status(201).json(editarCli);
    } catch (error) {
        console.error('Erro ao atualizar cliente');
        res.status(500).json({ error: 'Ocorreu um erro durante a atualização do cliente.'});
    }
  }

  async deletarCliente(req, res){
    const idCliente = req.params.idCliente;

    try {
        await clienteService.excluirCliente(idCliente);
        res.status(201).json({ message: 'Cliente deletado com sucesso'});
    } catch (error) {
        console.error('Erro ao deletar cliente', error);
        res.status(500).json({ error:'Ocorreu um erro durante a exclusão do cliente'})
    }
  }

  async listarCliente(req, res){
    const idCliente = req.params.idCliente;

    try {
        const cli = await clienteService.listarCliente(idCliente);
        res.status(201).json(cli);
    } catch (error) {
        console.error('Cliente não encontrado', error);
        res.status(500).json({ error: 'Erro ao buscar cliente'});
    }
  }

  async listarClientes(req, res){
    try {
        const allCli = await clienteService.listarClientes();
        res.status(201).json(allCli);
    } catch (error) {
        console.error('Erro ao listar clientes', error);
        res.status(500).json({ error:'Ocorreu um erro ao listar os clientes'});
    }
  }

}

module.exports = new ClienteController();