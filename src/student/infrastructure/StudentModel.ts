// src/student/infrastructure/StudentModel.ts
import mongoose, { Schema, Document } from 'mongoose';
import { Student } from '../domain/Student';

interface StudentDocument extends Student, Document {
  id: string;
}

const StudentSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
});

export default mongoose.model<StudentDocument>('Student', StudentSchema);


//todo: VER EL ERROR ESTE QUE DABA AQUI!!!