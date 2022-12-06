//Importar librerías
const express = require('express');
const router = express.Router();
const gruposController = require('../controllers/grupoController');

//localhost:3312/api/v1/grupos
router.get('/grupos', gruposController.obtenTodos);

// router.get('/grupos:id', 'TO DO');

// router.post('/nuevoGrupo', 'TO DO');

// router.delete('/eliminarGrupo', 'TO DO');

// router.put('/actualizarGrupo', 'TO DO');


module.exports = router;
