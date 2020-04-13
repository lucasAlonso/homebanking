const express = require("express");
const UsuarioController = require("../controllers/usuario-controller");
const middlewares = require("../middlewares/middlewares");
const api = express.Router();

api.post("/login", middlewares.logIn, UsuarioController.postLogin);
api.post("/", middlewares.verificarUsuario, middlewares.verificarDni, UsuarioController.postUsuario);
api.post("/:usuario/depositos", middlewares.tokenValido, UsuarioController.postDeposito);
api.post(
    "/transferencias",
    middlewares.tokenValido,
    middlewares.sonUsuarios,
    middlewares.tieneSaldo,
    UsuarioController.postTransferencia
);
api.get("/", UsuarioController.getUsuarios);
api.get("/:id", middlewares.tokenValido, UsuarioController.getUserInfo);

module.exports = api;
