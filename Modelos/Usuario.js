const mongoose = require('mongoose');

let UserSchema = new mongoose.Schema({
    ccUsuario: Number,
    nombreUsuario: String,
    apellidoUsuario: String
});
module.exports = mongoose.model('usuario',UserSchema,'C_Usuario');