import { Router } from "express";
import {
    register,
    login,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from "../controllers/authController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get("/users", authMiddleware, getUsers);

router.get("/users/:id", authMiddleware, getUserById);

router.put("/users/:id", authMiddleware, updateUser);

router.delete("/users/:id", authMiddleware, deleteUser);

export default router;