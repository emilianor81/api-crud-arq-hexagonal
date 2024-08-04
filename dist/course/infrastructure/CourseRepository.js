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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepository = void 0;
const CourseModel_1 = __importDefault(require("./CourseModel"));
class CourseRepository {
    create(course) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCourse = new CourseModel_1.default(course);
            return yield newCourse.save();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CourseModel_1.default.find().populate('alumnos').exec();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CourseModel_1.default.findById(id).populate('alumnos').exec();
        });
    }
    update(id, course) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield CourseModel_1.default.findByIdAndUpdate(id, course, { new: true }).exec();
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield CourseModel_1.default.findByIdAndDelete(id).exec();
        });
    }
}
exports.CourseRepository = CourseRepository;
