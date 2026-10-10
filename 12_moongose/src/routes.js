const express = require('express');
const router = express.Router();
const Produto = require('./Product');

router.post('/', async (req, res) => {
  try {
    const novoProduto = await Produto.create(req.body);
    return res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const produtos = await Produto.find();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar produtos' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json({ erro: 'ID inválido' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(200).json(produtoAtualizado);
  } catch (error) {
    return res.status(400).json({ erro: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const produtoRemovido = await Produto.findByIdAndDelete(req.params.id);

    if (!produtoRemovido) {
      return res.status(404).json({ mensagem: 'Produto não encontrado' });
    }

    return res.status(200).json({ mensagem: 'Produto removido com sucesso' });
  } catch (error) {
    return res.status(400).json({ erro: 'ID inválido' });
  }
});

module.exports = router;