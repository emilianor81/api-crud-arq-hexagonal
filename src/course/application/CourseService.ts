// src/course/application/CourseService.ts
import { ICourseRepository } from '../domain/ICourseRepository';
import { Course } from '../domain/Course';

export class CourseService {
  constructor(private courseRepository: ICourseRepository) {}

  async createCourse(course: Course): Promise<Course> {
    return await this.courseRepository.create(course);
  }

  async getAllCourses(): Promise<Course[]> {
    return await this.courseRepository.findAll();
  }

  async getCourseById(id: string): Promise<Course | null> {
    return await this.courseRepository.findById(id);
  }

  async updateCourse(id: string, course: Partial<Course>): Promise<Course | null> {
    return await this.courseRepository.update(id, course);
  }

  async deleteCourse(id: string): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
