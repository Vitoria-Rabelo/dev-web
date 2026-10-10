import mongoose from 'mongoose';

export async function connectDB() {
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error('A variável MONGODB_URI não está definida.');
    }

    await mongoose.connect(uri);
    console.log('\nConectado ao MongoDB com sucesso!');
  } catch (error) {
    console.error('\n Erro ao conectar ao MongoDB:', error);
    process.exit(1);
  }
}