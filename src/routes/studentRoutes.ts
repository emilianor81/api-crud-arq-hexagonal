// src/routes/studentRoutes.ts
import express, { Request, Response } from 'express';
import { StudentService } from '../student/application/StudentService';
import { StudentRepository } from '../student/infrastructure/StudentRepository';
import { studentSchema } from '../student/application/studentValidator';


const router = express.Router();
const studentService = new StudentService(new StudentRepository());

// Crear un nuevo alumno
router.post('/', async (req: Request, res: Response) => {
  try {
    const { error } = studentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Unknown error occurred' });
    }
  }
});

// Obtener todos los alumnos
router.get('/', async (req: Request, res: Response) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

// Actualizar un estudiante
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { error } = studentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const student = await studentService.updateStudent(req.params.id, req.body);
    if (student) {
      res.json(student);
    } else {
      res.status(404).json({ message: 'Estudiante no encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error occurred' });
    }
  }
});

// Eliminar un estudiante
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message });
    } else {
      res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});



export default router;
