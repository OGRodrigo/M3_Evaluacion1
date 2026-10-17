# Evaluación 1 - API Copa Libertadores

Proyecto desarrollado para la Evaluación 1 del Módulo 3 del Diplomado Full Stack.

La aplicación consiste en una API REST creada con Node.js y Express que permite consultar clubes de la Copa Libertadores, buscar clubes por país y obtener los años en que cada club ganó el torneo.

## Tecnologías utilizadas

- Node.js
- Express
- CORS
- JavaScript
- Yarn

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
yarn
```

## Ejecutar el proyecto

Para iniciar el servidor:

```bash
yarn dev
```

El servidor queda disponible en:

```text
http://localhost:3000
```

El proyecto utiliza `node --watch`, por lo que el servidor se reinicia automáticamente al guardar cambios.

## Endpoints

### Listar todos los clubes

```http
GET /api/clubes
```

### Buscar un club por ID

```http
GET /api/clubes/:id
```

Ejemplo:

```http
GET /api/clubes/9
```

### Buscar clubes por país

```http
GET /api/clubes?pais=Chile
```

La búsqueda no distingue entre mayúsculas y minúsculas.

### Consultar títulos de un club

```http
GET /api/titulos/:club
```

Ejemplo:

```http
GET /api/titulos/colo-colo
```

## Códigos de respuesta

- `200 OK`: la consulta fue realizada correctamente.
- `404 Not Found`: el país o club solicitado no existe.

Un club que existe pero no posee títulos responde con `200 OK` y un array vacío:

```json
[]
```

## Video de demostración

Enlace al video:

```text
PENDIENTE - agregar enlace de YouTube
```