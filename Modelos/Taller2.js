const mongoose = require('mongoose');

let TallerSchema = new mongoose.Schema({
  
    nombreTaller: String,
    descripcionTaller: String
});
module.exports = mongoose.model('taller',TallerSchema,'C_Taller');