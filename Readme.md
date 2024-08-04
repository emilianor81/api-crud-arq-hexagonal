# Proyecto Hexagonal CRUD

Este proyecto es una API CRUD basada en la arquitectura hexagonal. Utiliza varias tecnologías modernas para asegurar un código limpio, escalable y fácil de mantener. A continuación se describen las tecnologías utilizadas y las instrucciones para ejecutar el proyecto en diferentes entornos.

## Tecnologías Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **MongoDB**
- **Mongoose**
- **Docker**
- **Docker Compose**
- **ESLint**
- **Prettier**

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Configuración del Entorno de Desarrollo

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno de desarrollo local.

#### 1. Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```
 
#### 2. Instalar Dependencias

Asegúrate de tener npm instalado y ejecuta el siguiente comando para instalar las dependencias del proyecto.

```bash
npm install
```

#### 3. Configurar Variables de Entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:

```bash
MONGO_URL=mongodb://localhost:27017/hexagonalCrud
PORT=5000
```


#### 4. Ejecutar el Proyecto en Desarrollo

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando. Este comando compila TypeScript y ejecuta el servidor con nodemon para recargar automáticamente los cambios en el código.

```bash
npm run dev
```

#### 5. Probar la API
La API estará disponible en http://localhost:5000. Puedes usar herramientas como Postman o cURL para probar los endpoints.



## Ejecutar el Proyecto con Docker

Sigue estos pasos para ejecutar el proyecto en un entorno de producción usando Docker.

#### 1. Crear el Archivo .env
Asegúrate de que el archivo .env esté configurado correctamente con el siguiente contenido:

```bash
MONGO_URL=mongodb://mongo:27017/hexagonalCrud
PORT=5000
```

#### 2. Construir y Levantar los Contenedores
Ejecuta el siguiente comando para construir las imágenes Docker y levantar los contenedores definidos en el archivo docker-compose.yml.

```bash
docker-compose up --build
```

#### 3. Verificar la API
Una vez que los contenedores estén en funcionamiento, la API estará disponible en http://localhost:5000.



#### 4. Detener los Contenedores
Para detener y eliminar los contenedores, utiliza el siguiente comando:

```bash
docker-compose down
```



## Project FileSystem

```plaintext
hexagonal-crud
│
├── src
│   ├── student
│   │   ├── infrastructure
│   │   │   ├── StudentModel.ts
│   │   │   └── StudentRepository.ts
│   │   ├── application
│   │   │   └── StudentService.ts
│   │   └── domain
│   │       ├── Student.ts
│   │       └── IStudentRepository.ts
│   ├── course
│   │   ├── infrastructure
│   │   │   ├── CourseModel.ts
│   │   │   └── CourseRepository.ts
│   │   ├── application
│   │   │   └── CourseService.ts
│   │   └── domain
│   │       ├── Course.ts
│   │       └── ICourseRepository.ts
│   ├── routes
│   │   ├── studentRoutes.ts
│   │   └── courseRoutes.ts
│   ├── database.ts
│   └── server.ts
├── tsconfig.json
└── package.json
``` 




