import 'dotenv/config'
import express from "express"
import routerTrabajo from "./Routes/trabajos"
import routerServicios from './Routes/servicios'
import routerContactos from './Routes/contactos'
import cors from 'cors'



const app = express()


app.use(cors());
console.log('CORS activado');
const port = 3100


app.use(express.json())

app.get("/",(req, res) =>{
    res.send("Hola mundo")
})

app.use("/api/trabajos", routerTrabajo)
app.use("/api/servicios", routerServicios)
app.use("/api/contactos", routerContactos)

app.listen(port, ()=>{
    console.log(process.env.DATABASE_URL)
    console.log("Aplicacion corriendo en el puerto "+ port);
    
})