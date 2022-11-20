//Importar librerías
const mongoose = require('mongoose');

const Estudiantes = require('../models/estudiante');

const controller = {
    obtenTodos: async (req, res)=>{
        const listaEstudiantes = await Estudiantes.find();
        console.log(listaEstudiantes);
        res.status(200).json({"listaEstudiantes": listaEstudiantes});
    },
    obtenId: function(req, res){
        //TO DO
    },
    nuevoEstudiante: function(req, res){
        //TO DO
    },
    eliminarEstudiante: function(req, res){
        //TO DO
    },
    actualizarEstudiante: function(req, res){
        //TO DO
    }
}

module.exports = controller;