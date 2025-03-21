import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
    user_id,
  } = req.body;

  if (
    !nombre ||
    !email ||
    !tipo ||
    !dia ||
    !horario_apertura ||
    !horario_cierre ||
    !user_id
  ) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const query = `
      INSERT INTO establecimientos 
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
      user_id,
    ];
    await pool.execute(query, values);

    res.status(201).json({ message: 'Establecimiento registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el establecimiento:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}