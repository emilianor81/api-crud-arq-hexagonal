"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentSchema = void 0;
// src/student/application/studentValidator.ts
const joi_1 = __importDefault(require("joi"));
exports.studentSchema = joi_1.default.object({
    nombre: joi_1.default.string().min(2).max(40).required(),
    email: joi_1.default.string().email().required(),
    cursos: joi_1.default.array().items(joi_1.default.string().hex().length(24)).required()
});
