//Importar las librerías
const express = require('express');
const morgan = require('morgan');
//TO DO módulos de ruta
const app = express();
const estudiante = require('./routes/estudiante');
const profesor = require('./routes/profesor');

app.use(morgan('dev'));
app.use(express.json());

app.get("/", (req,res)=>{
    res.status(200).send("Hello world!");
});

//TO DO rutas
app.use("/api/v1/",estudiante);
app.use("/api/v1/",profesor);

//Exportar
module.exports = app;