const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cuentasSchema = new Schema({
    saldo: Number,
});

const CuentasModel = mongoose.model('Cuentas', cuentasSchema);
module.exports = CuentasModel;
