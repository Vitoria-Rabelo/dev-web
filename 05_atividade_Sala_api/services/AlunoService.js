const alunoRepository = require("../repositories/AlunoRepository")

class AlunoService {
    
    async listarTodos() {
        const alunos = await alunoRepository.listarTodos()
        return alunos   
    }
}

module.exports = new AlunoService()