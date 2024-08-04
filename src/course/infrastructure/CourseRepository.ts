// src/course/infrastructure/CourseRepository.ts
import { ICourseRepository } from '../domain/ICourseRepository';
import { Course } from '../domain/Course';
import CourseModel from './CourseModel';

export class CourseRepository implements ICourseRepository {
  async create(course: Course): Promise<Course> {
    const newCourse = new CourseModel(course);
    return await newCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return await CourseModel.find().populate('alumnos').exec();
  }

  async findById(id: string): Promise<Course | null> {
    return await CourseModel.findById(id).populate('alumnos').exec();
  }

  async update(id: string, course: Partial<Course>): Promise<Course | null> {
    return await CourseModel.findByIdAndUpdate(id, course, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await CourseModel.findByIdAndDelete(id).exec();
  }
}
