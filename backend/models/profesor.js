//importar librerías
const mongoose = require('mongoose');

const profesorSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    materia: String
},
{collection: 'Profesores'}
);

module.exports = mongoose.model('Profesores', profesorSchema);