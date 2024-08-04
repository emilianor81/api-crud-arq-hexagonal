// src/course/infrastructure/CourseModel.ts
import mongoose, { Schema, Document } from 'mongoose';
import { Course } from '../domain/Course';

interface CourseDocument extends Course, Document {id: string}

const CourseSchema: Schema = new Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String },
  alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
});

export default mongoose.model<CourseDocument>('Course', CourseSchema);
