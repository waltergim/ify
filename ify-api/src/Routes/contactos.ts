import express  from "express";
import { postContacto } from "../controllers/contactosController";

const routerContactos = express.Router()

routerContactos.post("/", postContacto)

export default routerContactos