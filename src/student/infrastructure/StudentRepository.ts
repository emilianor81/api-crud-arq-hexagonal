// src/student/infrastructure/StudentRepository.ts
import { IStudentRepository } from '../domain/IStudentRepository';
import { Student } from '../domain/Student';
import StudentModel from './StudentModel';

export class StudentRepository implements IStudentRepository {
  async create(student: Student): Promise<Student> {
    const newStudent = new StudentModel(student);
    return await newStudent.save();
  }

  async findAll(): Promise<Student[]> {
    return await StudentModel.find().populate('cursos').exec();
  }

  async findById(id: string): Promise<Student | null> {
    return await StudentModel.findById(id).populate('cursos').exec();
  }

  async update(id: string, student: Partial<Student>): Promise<Student | null> {
    return await StudentModel.findByIdAndUpdate(id, student, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await StudentModel.findByIdAndDelete(id).exec();
  }
}
