//importar librerías
const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
    id: String,
    nombre: String,
    aprobado: {
        type: Boolean,
        default:false
    }
});

module.exports = mongoose.model('estudiante', estudianteSchema);