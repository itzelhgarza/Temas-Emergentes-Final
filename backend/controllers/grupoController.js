//Importar librerías
const mongoose = require('mongoose');
const Grupos = require('../models/grupo');
const Profesor = require('../models/profesor');
const Estudiantes = require('../models/estudiante');
mongoose.pluralize(null);

const controller = {
    obtenTodos: async (req,res)=>{
        const listaGrupos = await Grupos.find()
        .populate({path:"profesor", model: "Profesores"})
        .populate({path: "estudiantes", model: "Estudiantes"});
        console.log(listaGrupos);
        res.status(200).json({"listaGrupos": listaGrupos});
    }
}

module.exports	= controller;