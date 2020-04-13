const express = require("express");
const CuentasController = require("../controllers/cuentas-controller");
const middlewares = require("../middlewares/middlewares");
const api = express.Router();

api.post("/", CuentasController.altaCuenta);
api.get("/", CuentasController.getCuentas);

module.exports = api;
