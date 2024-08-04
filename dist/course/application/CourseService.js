"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseService = void 0;
class CourseService {
    constructor(courseRepository) {
        this.courseRepository = courseRepository;
    }
    createCourse(course) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.create(course);
        });
    }
    getAllCourses() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.findAll();
        });
    }
    getCourseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.findById(id);
        });
    }
    updateCourse(id, course) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.courseRepository.update(id, course);
        });
    }
    deleteCourse(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.courseRepository.delete(id);
        });
    }
}
exports.CourseService = CourseService;
