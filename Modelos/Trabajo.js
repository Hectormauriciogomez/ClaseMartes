const mongoose = require('mongoose');

let TrabajoSchema = new mongoose.Schema({
  
    nombreTrabajo: String,
    descripcionTrabajo: String
});
module.exports = mongoose.model('trabajo',DeporteSchema,'C_Trabajo');