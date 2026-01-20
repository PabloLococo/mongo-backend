import {Router} from "express"
import { getDiscos, updateDisco,addnewDisco } from "../controllers/DiscoModel"
const DiscoRouter = Router()
DiscoRouter.get("/", getDiscos)
DiscoRouter.post("/", addnewDisco)
DiscoRouter.patch("/:id", updateDisco)
export {DiscoRouter}