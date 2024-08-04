// src/student/application/StudentService.ts
import { IStudentRepository } from '../domain/IStudentRepository';
import { Student } from '../domain/Student';

export class StudentService {
  constructor(private studentRepository: IStudentRepository) {}

  async createStudent(student: Student): Promise<Student> {
    return await this.studentRepository.create(student);
  }

  async getAllStudents(): Promise<Student[]> {
    return await this.studentRepository.findAll();
  }

  async getStudentById(id: string): Promise<Student | null> {
    return await this.studentRepository.findById(id);
  }

  async updateStudent(id: string, student: Partial<Student>): Promise<Student | null> {
    return await this.studentRepository.update(id, student);
  }

  async deleteStudent(id: string): Promise<void> {
    await this.studentRepository.delete(id);
  }
}
