const Cliente = require('../models/cliente');

class ClienteService {
  async criarCliente(nome, telefone, email) {
    return Cliente.create({nome, telefone, email });
  }

  async listarCliente(idCliente) {
    return Cliente.findByPk(idCliente);
  }

  async atualizarCliente(idCliente, nome, telefone, email){
    const cli = await Cliente.findByPk(idCliente);
    return cli.update({ nome, telefone, email});
  }

  async excluirCliente(idCliente){
    const cli = await Cliente.findByPk(idCliente);
    return cli.destroy();
  }

  async listarClientes(){
    return Cliente.findAll();
  } 
}
module.exports = new ClienteService();