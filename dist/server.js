"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/server.ts
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const studentRoutes_1 = __importDefault(require("./routes/studentRoutes"));
const courseRoutes_1 = __importDefault(require("./routes/courseRoutes"));
const app = (0, express_1.default)();
// Conectar a la base de datos
(0, database_1.connectDB)();
// Middleware
app.use(express_1.default.json());
// Configurar rutas
app.use('/api/students', studentRoutes_1.default);
app.use('/api/courses', courseRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
