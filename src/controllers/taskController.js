import Task from "../models/Task.js";

export const createTask = async (req, res) => {
    try {

        const { title, description, status, priority, dueDate } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            priority,
            dueDate,
            user: req.user.id
        });

        return res.status(201).json({
            message: "Tarefa criada com sucesso!",
            task
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao criar tarefa."
        });

    }
};

export const getTasks = async (req, res) => {
    try {

        const tasks = await Task.find({
            user: req.user.id
        });

        return res.status(200).json(tasks);

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao buscar tarefas."
        });

    }
};

export const getTaskById = async (req, res) => {
    try {

        const { id } = req.params;

        const task = await Task.findOne({
            _id: id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                message: "Tarefa não encontrada."
            });
        }

        return res.status(200).json(task);

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao buscar tarefa."
        });

    }
};

export const updateTask = async (req, res) => {
    try {

        const { id } = req.params;

        const task = await Task.findOneAndUpdate(
            {
                _id: id,
                user: req.user.id
            },
            req.body,
            {
                new: true
            }
        );

        if (!task) {
            return res.status(404).json({
                message: "Tarefa não encontrada."
            });
        }

        return res.status(200).json({
            message: "Tarefa atualizada com sucesso!",
            task
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao atualizar tarefa."
        });

    }
};

export const deleteTask = async (req, res) => {
    try {

        const { id } = req.params;

        const task = await Task.findOneAndDelete({
            _id: id,
            user: req.user.id
        });

        if (!task) {
            return res.status(404).json({
                message: "Tarefa não encontrada."
            });
        }

        return res.status(200).json({
            message: "Tarefa excluída com sucesso!"
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao excluir tarefa."
        });

    }
};