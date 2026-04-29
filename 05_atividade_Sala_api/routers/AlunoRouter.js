const express = require("express")
const alunoService = require("../services/AlunoService")

const router = express.Router()

router.get(
    "/",
    async (request, resolve) => {
        const alunos = await alunoService.listarTodos()
        resolve.json(alunos)
    }
)

module.exports = router