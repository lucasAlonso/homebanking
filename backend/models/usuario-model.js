const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UsuarioSchema = new Schema({
    dni: Number,
    nombres: String,
    apellidos: String,
    usuario: String,
    password: String,
    cuentas: [],
});

const UsuarioModel = mongoose.model('usuario', UsuarioSchema);
module.exports = UsuarioModel;
