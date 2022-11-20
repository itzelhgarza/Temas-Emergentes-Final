//importar librerías
const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    materia: String
});

module.exports = mongoose.model('profesor', profesorSchema);