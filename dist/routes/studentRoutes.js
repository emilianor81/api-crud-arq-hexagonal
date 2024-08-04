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
// src/routes/studentRoutes.ts
const express_1 = __importDefault(require("express"));
const StudentService_1 = require("../student/application/StudentService");
const StudentRepository_1 = require("../student/infrastructure/StudentRepository");
const studentValidator_1 = require("../student/application/studentValidator");
const router = express_1.default.Router();
const studentService = new StudentService_1.StudentService(new StudentRepository_1.StudentRepository());
// Crear un nuevo alumno
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = studentValidator_1.studentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const student = yield studentService.createStudent(req.body);
        res.status(201).json(student);
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
// Obtener todos los alumnos
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield studentService.getAllStudents();
        res.json(students);
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
// Actualizar un estudiante
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = studentValidator_1.studentSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        const student = yield studentService.updateStudent(req.params.id, req.body);
        if (student) {
            res.json(student);
        }
        else {
            res.status(404).json({ message: 'Estudiante no encontrado' });
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
// Eliminar un estudiante
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studentService.deleteStudent(req.params.id);
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
