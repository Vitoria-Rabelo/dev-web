require('dotenv').config();

const app = require('./src/app');
const connectDB = require('./src/database');

const PORT = Number(process.env.PORT) || 3000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error('Não foi possível iniciar o servidor:', error.message);
  process.exitCode = 1;
});