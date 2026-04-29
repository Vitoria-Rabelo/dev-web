const AlunoModel = require("../models/AlunoModel")

const alunos = [
    new AlunoModel(12345, "Diana Braga", "https://www.quixada.ufc.br/wp-content/uploads/2015/11/Diana-Braga.png"),
    new AlunoModel(67890, "Rainara Maia", "https://www.quixada.ufc.br/wp-content/uploads/2016/12/rainara-947x1024.jpg"),
    new AlunoModel(23486, "Regis Pires", "https://www.quixada.ufc.br/wp-content/uploads/2015/05/Régis-Pires-Magaçhães1.png"),
]

class AlunoRepository {

    async listarTodos() {
        return Promise.resolve(alunos)
    }
}

module.exports = new AlunoRepository()