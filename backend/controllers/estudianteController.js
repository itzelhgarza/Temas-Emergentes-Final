//Importar librerías
const mongoose = require('mongoose');
mongoose.pluralize(null);

const Estudiantes = require('../models/estudiante');

const controller = {
    obtenTodos: async (req, res) => {
        const listaEstudiantes = await Estudiantes.find();
        console.log(listaEstudiantes);
        res.status(200).json({ "listaEstudiantes": listaEstudiantes });
    },
    obtenId: async (req, res) => {
        const id = req.params.id;
        const estudiante = await Estudiantes.findOne({ id: id });
        res.status(200).json({ "Estudiante": estudiante });

    },
    nuevoEstudiante: async (req, res) => {
        const estudiante = new Estudiantes(req.body);
        await Estudiantes.insertMany(estudiante);
        res.status(200).json({ "Message": "Se registró un estudiante" });
    },
    eliminarEstudiante: async (req, res) => {
        const id = req.params.id;
        await Estudiantes.deleteOne({id:id});
        res.status(200).json({"Message": "Se eliminó estudiante"});
    },
    actualizarEstudiante: async (req, res) => {
        const Estudiante = new Estudiantes(req.body);
        const id = Estudiante.id;
        const EstudianteBD = await Estudiantes.findOne({id:id});
        const _id = EstudianteBD._id;
        await Estudiantes.findOneAndUpdate({_id:_id},Estudiante);
        res.status(200).json({"Message": "Se actualizó el estudiante"});
    }
}

module.exports = controller;