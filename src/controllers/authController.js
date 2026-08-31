import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "Este e-mail já está cadastrado.",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return res.status(201).json({
            message: "Usuário cadastrado com sucesso!",
            user,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Erro ao cadastrar usuário.",
        });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({
            message: "Erro ao buscar usuários.",
        });
    }
};

export const getUserById = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        return res.status(200).json(user);

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao buscar usuário."
        });

    }
};

export const updateUser = async (req, res) => {
    try {

        const { id } = req.params;

        const { name, email, password } = req.body;

        const updateData = {
            name,
            email
        };

        if (password) {
            updateData.password = await bcrypt.hash(password, 10);
        }

        const user = await User.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        return res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            user
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao atualizar usuário."
        });

    }
};

export const deleteUser = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);

        if (!user) {
            return res.status(404).json({
                message: "Usuário não encontrado."
            });
        }

        return res.status(200).json({
            message: "Usuário excluído com sucesso!"
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao excluir usuário."
        });

    }
};

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "E-mail ou senha inválidos."
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "E-mail ou senha inválidos."
            });
        }

       
        const token = jwt.sign(
            {
                id: user._id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );


        return res.status(200).json({
            message: "Login realizado com sucesso!",
            token,
            user
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao realizar login."
        });

    }
};