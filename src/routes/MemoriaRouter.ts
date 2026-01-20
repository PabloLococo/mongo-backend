import {Router} from "express"
import { getMemorias, updateMemoria,addnewMemoria } from "../controllers/MemoriaController"

const MemoriaRouter = Router()
MemoriaRouter.get("/", getMemorias)
MemoriaRouter.post("/", addnewMemoria)
MemoriaRouter.patch("/:id", updateMemoria)
export {MemoriaRouter}