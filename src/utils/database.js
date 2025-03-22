// lib/database.js
import { connectDB } from '../utils/mongoose-db'; 
import Task from '../models/Task'; 

export async function cleanDatabase() {

  await connectDB();

  try {
    // Lógica de depuración: Eliminar usuarios con correos inválidos
    const usersWithInvalidEmails = await Task.find({ email: { $not: /.+\@.+\..+/ } });

    // Eliminar los usuarios con correos inválidos
    await Task.deleteMany({ _id: { $in: usersWithInvalidEmails.map(user => user._id) } });

    console.log('Usuarios con correos inválidos eliminados.');

  } catch (error) {
    console.error('Error durante la limpieza de la base de datos:', error);
    throw new Error('Hubo un error al limpiar la base de datos');
  }
}
