import express from "express";
import { login, signUp } from "../controllers/userController";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);

export default router;
