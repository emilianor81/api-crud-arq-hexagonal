// src/course/domain/ICourseRepository.ts
import { Course } from './Course';

export interface ICourseRepository {
  create(course: Course): Promise<Course>;
  findAll(): Promise<Course[]>;
  findById(id: string): Promise<Course | null>;
  update(id: string, course: Partial<Course>): Promise<Course | null>;
  delete(id: string): Promise<void>;
}
