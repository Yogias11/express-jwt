import express from "express";
import { getUser, insertUser, login } from "../controllers/Users.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUser);
router.post('/users', insertUser);
router.post('/login', login);
router.get('/token', refreshToken);

export default router;