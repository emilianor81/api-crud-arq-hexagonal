// src/student/application/studentValidator.ts
import Joi from 'joi';

export const studentSchema = Joi.object({
  nombre: Joi.string().min(2).max(40).required(),
  email: Joi.string().email().required(),
  cursos: Joi.array().items(Joi.string().hex().length(24)).required()
});
