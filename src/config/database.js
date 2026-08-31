import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("✅ MongoDB conectado!");
  } catch (error) {
    console.log("❌ Erro ao conectar ao MongoDB");
    console.error(error);
    process.exit(1);
  }
};

export default connectDatabase;