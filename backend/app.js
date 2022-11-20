//Importar las librerías
const express = require('express');
const morgan = require('morgan');
//TO DO módulos de ruta
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("Hello world!");
});

//TO DO rutas

//Exportar
module.exports = app;