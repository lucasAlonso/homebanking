const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let cuentasSchema = new Schema({
    saldo: Number,
    ownerId: String
});

const CuentasModel = mongoose.model("Cuentas", cuentasSchema);
module.exports = CuentasModel;
