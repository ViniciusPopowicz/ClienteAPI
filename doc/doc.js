const rotas = require('./rotas.json');

class Documentacao { 
    async getDocumentacao(req, res){
        return res.status(201).json(rotas);
    }
}

module.exports = new Documentacao();