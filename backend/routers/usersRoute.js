import express from "express";
import { getUsers, createUser, loginUser } from "../controllers/users.js";
const router = express.Router();

router.get("/users", getUsers);
router.post("/register", createUser);
router.post("/login", loginUser);

export default router;
