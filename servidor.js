const express = require('express');
const mongoose = require('mongoose');
const _UserSchema = require("./Modelos/Usuario.js");
const _DeportSchema = require("./Modelos/Deporte.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Ruta = express.Router();

mongoose.connect("mongodb+srv://solucion:solucion@clustersoluciones.imbyopq.mongodb.net/SolucionBD?retryWrites=true&w=majority");

// Metodo Get
Ruta.get('/usuario',(req, res) =>{
    _UserSchema.find(function(err,datos){
        if(err){
            console.log("no se pudo leer");
        }
        res.send(datos)
    })
} );
// Metodo POST

Ruta.post('/usuario', (req, res) => {
    const nuevaTarea = _UserSchema(req.body);
    nuevaTarea
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
});

//Metodo PUT
Ruta.put("/usuario/:id", (req, res) => {
    const {id} = req.params;
    const {ccUsuario, nombreUsuario, apellidoUsuario} = req.body;
    _UserSchema
    .updateOne({_id:id}, {$set: {ccUsuario, nombreUsuario, apellidoUsuario}})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
});

// Metodo DELETE
Ruta.delete("/usuario/:id", (req, res) => {
    const {id} = req.params;
    _UserSchema
    .remove({_id:id})
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
});
// Estoy editando un poco
// Trabajando otro Modelo "Deporte"

// Metodo Get
Ruta.get('/deporte',(req, res) =>{
    _DeportSchema.find(function(err,datos){
        if(err){
            console.log("no se pudo leer");
        }
        res.send(datos)
    })
} );

// Metodo POST

Ruta.post('/deporte', (req, res) => {
    const nuevaTarea = _DeportSchema(req.body);
    nuevaTarea
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({message: error}));
});

app.use(Ruta);
app.listen(3000, () => {
    console.log("Servidor Up")
});