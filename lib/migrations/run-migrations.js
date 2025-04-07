const fs = require('fs');
const path = require('path');
const pool = require('../db');

async function runMigrations() {
  try {
    // Leer el archivo SQL
    const sql = fs.readFileSync(
      path.join(__dirname, 'create-establecimientos.sql'),
      'utf8'
    );

    // Ejecutar la migración
    await pool.execute(sql);
    console.log('Migración ejecutada exitosamente');
  } catch (error) {
    console.error('Error al ejecutar la migración:', error);
  } finally {
    // Cerrar la conexión
    await pool.end();
  }
}

runMigrations(); 