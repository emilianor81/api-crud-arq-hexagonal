"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.courseSchema = void 0;
// src/course/application/courseValidator.ts
const joi_1 = __importDefault(require("joi"));
exports.courseSchema = joi_1.default.object({
    titulo: joi_1.default.string().min(3).max(50).required(),
    descripcion: joi_1.default.string().allow('').max(500),
    alumnos: joi_1.default.array().items(joi_1.default.string().hex().length(24)).required()
});
