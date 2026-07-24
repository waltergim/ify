import { Request, Response } from 'express'
import { pool } from '../config/database'

export const getTrabajo = async (req: Request, res: Response) => {
  try {
    console.log("funciona");
    
    const result = await pool.query('SELECT * FROM "trabajos"')
    res.json(result.rows)
  } catch (error: any) {
    console.log(error)
    res.status(500).json({ error: error.message })
  }
}