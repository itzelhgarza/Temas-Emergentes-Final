//importar librerías
const mongoose = require('mongoose');

const grupoSchema = new mongoose.Schema({
    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: profesor,
        autopopulate: true,
    },
    estudiantes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: estudiante,
        autopopulate: true
    }]
});

module.exports = mongoose.model('grupo', grupoSchema);