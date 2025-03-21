import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '../../lib/db';

type Data = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const query = 'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)';
    const values = [name, email, password, 1];
    await pool.execute(query, values);

    res.status(201).json({ message: 'Ususario Registrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}