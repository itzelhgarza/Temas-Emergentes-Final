//Importar librerías
const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudianteController');


router.get('/estudiantes', estudiantesController.obtenTodos);

// router.get('/estudiantes:id', 'TO DO');

// router.post('/nuevoEstudiante', 'TO DO');

// router.delete('/eliminarEstudiante', 'TO DO');

// router.put('/actualizarEstudiante', 'TO DO');



module.exports = router;
