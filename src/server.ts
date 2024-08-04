// src/server.ts
import express from 'express';
import { connectDB } from './database';
import studentRoutes from './routes/studentRoutes';
import courseRoutes from './routes/courseRoutes';

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());

// Configurar rutas
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
