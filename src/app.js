import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDatabase from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

connectDatabase();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", authRoutes);

app.use("/tasks", taskRoutes);

app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("DeskFlow Finance API funcionando corretamente 🚀");
});

export default app;