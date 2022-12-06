//Importar librerías
const mongoose = require('mongoose');
const Profesores = require('../models/profesor');
mongoose.pluralize(null);

const controller = {
    obtenTodos: async (req,res) => {
        const listaProfesores = await Profesores.find();
        console.log(listaProfesores);
        res.status(200).json({"listaProfesores": listaProfesores});
    },
    obtenId: async (req,res) => {
        const id = req.params.id;
        const profesor = await Profesores.findOne({id:id});
        res.status(200).json({"Profesor": profesor});
    },
    nuevoProfesor: async (req,res) => {
        const profesor = new Profesores(req.body);
        await Profesores.insertMany(profesor);
        res.status(200).json({"Message": "Se registró profesor"});
    },
    eliminarProfesor: async (req, res) => {
        const id = req.params.id;
        await Profesores.deleteOne({id:id});
        res.status(200).json({"Message": "Se eliminó profesor"});
    },
    actualizarProfesor: async (req, res) => {
        const profesor = new Profesores(req.body);
        const id = profesor.id;
        const profesorBD = await Profesores.findOne({id:id});
        profesor._id = profesorBD._id;
        await Profesores.findOneAndUpdate({_id:profesor._id},profesor);
        res.status(200).json({"Message": "Se actualizó el profesor"});
    }
}

module.exports = controller;