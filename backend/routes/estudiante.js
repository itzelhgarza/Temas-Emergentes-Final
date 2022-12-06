//Importar librerías
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudianteController');

// localhost:3312/api/v1/estudiantes
router.get('/estudiantes', estudiantesController.obtenTodos);

// localhost:3312/api/v1/estudiantes:id
router.get('/estudiantes:id',  estudiantesController.obtenId);

// localhost:3312/api/v1/nuevoEstudiante
router.post('/nuevoEstudiante', estudiantesController.nuevoEstudiante);

// localhost:3312/api/v1/eliminarEstudiante:id
router.delete('/eliminarEstudiante:id', estudiantesController.eliminarEstudiante);

// localhost:3312/api/v1/actualizarEstudiante
router.put('/actualizarEstudiante', estudiantesController.actualizarEstudiante);



module.exports = router;
