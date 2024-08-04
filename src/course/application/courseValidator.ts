// src/course/application/courseValidator.ts
import Joi from 'joi';

export const courseSchema = Joi.object({
  titulo: Joi.string().min(3).max(50).required(),
  descripcion: Joi.string().allow('').max(500),
  alumnos: Joi.array().items(Joi.string().hex().length(24)).required()
});

