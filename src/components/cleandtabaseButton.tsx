// components/CleanDatabaseButton.js
'use client';

import { useState } from 'react';
import axios from 'axios';

export default function CleanDatabaseButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleCleanDatabase = async () => {
    setIsLoading(true);
    setMessage('');  // Limpiar mensaje previo

    try {
      // Hacer la solicitud POST a la API
      const response = await axios.post('/api/clean-database');
      setMessage(response.data.message || 'Base de datos limpiada correctamente.');
    } catch (error) {
      console.error('Error al limpiar la base de datos:', error);
      setMessage('Hubo un error al limpiar la base de datos.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <button
      onClick={handleCleanDatabase}
      disabled={isLoading}
      className={`px-4 py-2 bg-green-500 text-white rounded ${
        isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'
      }`}
      >
      {isLoading ? 'Limpiando...' : 'Limpiar Base de Datos'}
      </button>
      {message && <p className="text-center text-gray-700">{message}</p>}
    </div>
  );
}
