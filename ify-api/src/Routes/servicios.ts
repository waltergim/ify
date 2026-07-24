import  express from "express";
import  {getServicios} from "../controllers/serviciosController"
const routerServicios = express.Router()


routerServicios.get("/", getServicios)


export default routerServicios