const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: [true, 'O nome do produto é obrigatório.'],
      trim: true,
    },
    preco: {
      type: Number,
      required: [true, 'O preço é obrigatório.'],
      min: [0, 'O preço não pode ser negativo.'],
    },
    descricao: {
      type: String,
      trim: true,
    },
    emEstoque: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Produto', produtoSchema);