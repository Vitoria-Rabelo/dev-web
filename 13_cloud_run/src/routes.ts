import { Router } from 'express';
import { Fruit } from './models/Frutas.js';

const router = Router();

router.post('/frutas', async (req, res) => {
  try {
    const fruit = await Fruit.create(req.body);
    res.status(201).json(fruit);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar fruta' });
  }
});

router.get('/frutas', async (_req, res) => {
  try {
    res.json(await Fruit.find());
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar frutas' });
  }
});

router.get('/frutas/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findById(req.params.id);
    if (!fruit) return res.status(404).json({ error: 'Fruta não encontrada' });
    res.json(fruit);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar fruta' });
  }
});

router.put('/frutas/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fruit) return res.status(404).json({ error: 'Fruta não encontrada' });
    res.json(fruit);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar fruta' });
  }
});

router.patch('/frutas/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!fruit) return res.status(404).json({ error: 'Fruta não encontrada' });
    res.json(fruit);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar' });
  }
});

router.delete('/frutas/:id', async (req, res) => {
  try {
    const fruit = await Fruit.findByIdAndDelete(req.params.id);
    if (!fruit) return res.status(404).json({ error: 'Fruta não encontrada' });
    res.json({ message: 'Fruta deletada' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar fruta' });
  }
});

export default router;