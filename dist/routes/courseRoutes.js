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
// src/routes/courseRoutes.ts
const express_1 = __importDefault(require("express"));
const CourseService_1 = require("../course/application/CourseService");
const CourseRepository_1 = require("../course/infrastructure/CourseRepository");
const courseValidator_1 = require("../course/application/courseValidator");
const router = express_1.default.Router();
const courseService = new CourseService_1.CourseService(new CourseRepository_1.CourseRepository());
// Crear un nuevo curso
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validar el cuerpo de la solicitud
        const { error } = courseValidator_1.courseSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const course = yield courseService.createCourse(req.body);
        res.status(201).json(course);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Obtener todos los cursos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courses = yield courseService.getAllCourses();
        res.json(courses);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Actualizar un curso
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validar el cuerpo de la solicitud
        const { error } = courseValidator_1.courseSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const course = yield courseService.updateCourse(req.params.id, req.body);
        if (course) {
            res.json(course);
        }
        else {
            res.status(404).json({ message: 'Curso no encontrado' });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
        else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
}));
// Eliminar un curso
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield courseService.deleteCourse(req.params.id);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ error: error.message });
        }
        else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
}));
exports.default = router;
