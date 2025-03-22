// app/api/clean-database/route.js
import { cleanDatabase } from '../../../utils/database'

export async function POST(req) {
  try {
    // Ejecutamos la función de limpieza de la base de datos
    await cleanDatabase();
    
    return new Response(JSON.stringify({ message: 'Base de datos limpiada correctamente' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error al limpiar la base de datos:', error);
    return new Response(JSON.stringify({ error: 'Hubo un error al limpiar la base de datos' }), {
      status: 500,
    });
  }
}
