import {Router} from "express"
import { addnewPC,updatePC,getPCs, deletePC } from "../controllers/PcController"

const PCRouter = Router()

PCRouter.get("/", getPCs)
PCRouter.post("/", addnewPC)
PCRouter.patch(":id", updatePC)
PCRouter.delete("/:id", deletePC)

export {PCRouter}