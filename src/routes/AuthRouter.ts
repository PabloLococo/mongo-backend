import { Router } from "express";
import { login, register } from "../controllers/AuthController";

const authRouter = Router()

authRouter.post("/register",register)
authRouter.post("/login", login)

export { authRouter}