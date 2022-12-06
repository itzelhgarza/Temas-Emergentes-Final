//Importar librerías
const express = require('express');
const router = express.Router();
const profesoresController = require('../controllers/profesorController');

//localhost:3312/api/v1/profesores
router.get('/profesores', profesoresController.obtenTodos);

//localhost:3312/api/v1/profesor:id
router.get('/profesor:id', profesoresController.obtenId);

//localhost:3312/api/v1/nuevoProfesor
router.post('/nuevoProfesor', profesoresController.nuevoProfesor);

//localhost:3312/api/v1/eliminarProfesor:id
router.delete('/eliminarProfesor:id', profesoresController.eliminarProfesor);

//localhost:3312/api/v1/actualizarProfesor
router.put('/actualizarProfesor', profesoresController.actualizarProfesor);


module.exports = router;
