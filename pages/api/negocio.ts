import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../../lib/config';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Verificar el token JWT
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    // Decodificar el token para obtener el user_id
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };
    const user_id = decoded.id;

    const {
      nombre,
      email,
      ubicacion,
      descripcion,
      tipo,
      url_negocio,
      dia,
      horario_apertura,
      horario_cierre,
    } = req.body;

    // Validar campos requeridos
    if (!nombre || !email || !tipo || !dia || !horario_apertura || !horario_cierre) {
      return res.status(400).json({ message: 'Faltan campos requeridos' });
    }

    // Insertar en la base de datos
    const query = `
      INSERT INTO negocios 
      (nombre, email, ubicacion, descripcion, tipo, url_negocio, dia, horario_apertura, horario_cierre, user_id) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const values = [
      nombre,
      email,
      ubicacion || null,
      descripcion || null,
      tipo,
      url_negocio || null,
      dia,
      horario_apertura,
      horario_cierre,
      user_id
    ];

    await pool.execute(query, values);

    res.status(201).json({ message: 'Establecimiento registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el establecimiento:', error);
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}