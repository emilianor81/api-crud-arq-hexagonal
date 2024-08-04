// src/routes/courseRoutes.ts
import express, { Request, Response } from 'express';
import { CourseService } from '../course/application/CourseService';
import { CourseRepository } from '../course/infrastructure/CourseRepository';
import { courseSchema } from '../course/application/courseValidator';


const router = express.Router();
const courseService = new CourseService(new CourseRepository());

// Crear un nuevo curso
router.post('/', async (req: Request, res: Response) => {
  try {
    // Validar el cuerpo de la solicitud
    const { error } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const course = await courseService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Unknown error occurred' });
    }
  }
});

// Obtener todos los cursos
router.get('/', async (req: Request, res: Response) => {
  try {
    const courses = await courseService.getAllCourses();
    res.json(courses);
  } catch (error) {
    if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Unknown error occurred' });
    }
  }
});

// Actualizar un curso
router.put('/:id', async (req: Request, res: Response) => {
  try {
    // Validar el cuerpo de la solicitud
    const { error } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    
    const course = await courseService.updateCourse(req.params.id, req.body);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ message: 'Curso no encontrado' });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'Unknown error occurred' });
    }
  }
});

// Eliminar un curso
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await courseService.deleteCourse(req.params.id);
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
