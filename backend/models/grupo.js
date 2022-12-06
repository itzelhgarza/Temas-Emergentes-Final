//importar librerías
const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    id: String,
    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'profesor',
        autopopulate: true,
    },
    estudiantes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Estudiantes',
        autopopulate: true
    }]
});

module.exports = mongoose.model('Grupos', grupoSchema);