/*Declaramos librerías*/
const mongoose = require ('mongoose');
const dotenv = require('dotenv');
/*Configurar variables de entorno*/
dotenv.config({path: './config.env'});
const app = require('./app.js');


//Se guarda la constante DATABASE
const DB = process.env.DATABASE;

//Realizamos la conexión a la DB
mongoose.connect(DB).then(con=>{
    console.log("Se conectó la BD correctamente")
}).catch(err=>{
    console.log(err);
});

//Se declara el puerto
const PORT = process.env.PORT || 3000;

//Levantamos el server
const server = app.listen(PORT,()=>{
    console.log(`App corriendo en el puerto: ${PORT}`);
});
