// src/student/domain/IStudentRepository.ts
import { Student } from './Student';

export interface IStudentRepository {
  create(student: Student): Promise<Student>;
  findAll(): Promise<Student[]>;
  findById(id: string): Promise<Student | null>;
  update(id: string, student: Partial<Student>): Promise<Student | null>;
  delete(id: string): Promise<void>;
}
