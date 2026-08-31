import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["Pendente", "Em andamento", "Concluída"],
            default: "Pendente"
        },

        priority: {
            type: String,
            enum: ["Baixa", "Média", "Alta"],
            default: "Média"
        },

        dueDate: {
            type: Date
        },

        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;