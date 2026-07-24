import express from "express"
import { getTrabajo } from "../controllers/trabajosController"
const routerTrabajo = express.Router()

routerTrabajo.get("/", getTrabajo)
 





export default routerTrabajo