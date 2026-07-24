import 'dotenv/config'  
import { Request, Response } from "express";
import { pool } from '../config/database';

 

export const getServicios = async(req: Request, res: Response) =>{
    try {
        
         const result = await pool.query('SELECT * FROM "Servicios"')
         
         res.json(result.rows)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
   
}