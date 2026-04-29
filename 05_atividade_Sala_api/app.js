const express = require("express")

const alunoRouter = require("./routers/AlunoRouter")

const app = express()
const port = 3000

app.use("/api/alunos",alunoRouter)

app.use(
    (request, resolve) => {
        resolve.status(404).json({erro:"Rota não encontrada!"})
    }
)

app.listen(
    port,
    () => {
        console.log(`API executando na porta ${port}`)
    }
)