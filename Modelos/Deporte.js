const mongoose = require('mongoose');

let DeporteSchema = new mongoose.Schema({
  
    nombreDeporte: String,
    descripcionDeporte: String
});
module.exports = mongoose.model('deporte',DeporteSchema,'C_Deporte');