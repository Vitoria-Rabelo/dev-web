import express from 'express';
import cors from 'cors';
import { connectDB } from './database.js';
import fruitRoutes from './routes.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api', fruitRoutes);

app.get('/health', (_req, res) => {
  res.send('API operando normalmente.');
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(` Servidor rodando na porta ${port}`);
  });
});