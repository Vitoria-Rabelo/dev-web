import mongoose from 'mongoose';

const fruitSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  tipo: { type: String, required: true },
}, {
  timestamps: true,
});

export const Fruit = mongoose.model('Fruit', fruitSchema);
