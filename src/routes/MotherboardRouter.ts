import {Router} from "express"
import { addnewMotherboard, getMotherboards, updateMotherboards } from "../controllers/MotherboardController"
import { MemoriaRouter } from "./MemoriaRouter"


const MotherboardRouter = Router()
MotherboardRouter.get("/", getMotherboards)
MotherboardRouter.post("/", addnewMotherboard)
MotherboardRouter.patch("/:id", updateMotherboards)
export {MotherboardRouter}