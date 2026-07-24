import "dotenv/config";
import { Request, Response } from "express";
import { pool } from "../config/database";

export const postContacto = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
   

    if (!name || !email || !message) {
      res.status(400).json({
        error: "Por favor ingrese los datos solicitados",
      });
      return
    }

    const result = await pool.query(
      'INSERT INTO "Contactos" (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message],
    );

    res.status(201).json({ message: "Contacto guardado", data: result.rows });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
