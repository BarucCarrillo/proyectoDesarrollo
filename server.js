const fs = require('fs');
const https = require('https');
const express = require('express');
const next = require('next');

// Cargar los archivos del certificado y la clave privada
const key = fs.readFileSync('certs/key.pem');    // Ruta al archivo key.pem
const cert = fs.readFileSync('certs/cert.pem');  // Ruta al archivo cert.pem

// Configuración de Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Definir una ruta para manejar todas las solicitudes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Crear un servidor HTTPS utilizando Express y los archivos del certificado
  https.createServer({ key, cert }, server).listen(3000, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log('Servidor HTTPS ejecutándose en https://localhost:3000');
    console.log('Accesible en tu IP local: https://192.168.1.7:3000');
  });
});
