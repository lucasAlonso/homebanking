const jwt = require("jsonwebtoken");
const firma = require("../firma.json");
let Usuario = require("../models/usuario-model");

function verificarDni(req, res, next) {
    let dniUsuario = req.body.dni;
    Usuario.find({ dni: dniUsuario })
        .then(usuariosEncontrados => {
            if (usuariosEncontrados[0]) {
                res.status(405).send("Dni existente");
            } else {
                next();
            }
        })
        .catch(err => {
            res.status(500).send();
        });
}

function verificarUsuario(req, res, next) {
    let userSend = req.body.usuario;
    Usuario.find({ usuario: userSend })
        .then(usuariosEncontrados => {
            if (usuariosEncontrados[0]) {
                res.status(405).send("Usuario existente");
            } else {
                next();
            }
        })
        .catch(err => {
            res.status(500).send();
        });
}

function logIn(req, res, next) {
    const userSend = req.body.usuario;
    const passwordSend = req.body.password;
    Usuario.find({ usuario: userSend, password: passwordSend })
        .then(usuariosEncontrados => {
            if (usuariosEncontrados[0]) {
                let contenido = { usuario: userSend };
                let token = jwt.sign(contenido, firma);
                let idUser = usuariosEncontrados[0]._id;
                req.token = { token: token };
                req.idUser = idUser;
                next();
            } else {
                res.status(401).send("Algunos de los datos no son correctos");
            }
        })
        .catch(err => {
            res.status(500).send();
        });
}

function getUserFromReq(req) {
    const token = req.headers.authorization.split(" ")[1];
    const decodificado = jwt.verify(token, firma);
    return decodificado.usuario;
}

function tokenValido(req, res, next) {
    const usuario = getUserFromReq(req);
    if (usuario) {
        req.usuario = usuario;
        next();
    } else {
        res.status(401).send("usuario inválido");
    }
}

function sonUsuarios(req, res, next) {
    let emisor = req.body.usuario;
    let usuarioEmisor = usuarios.find(element => element.usuario === emisor);
    let receptor = req.body.receptor;
    let usuarioReceptor = usuarios.find(element => element.usuario === receptor);
    if (usuarioEmisor && usuarioReceptor) {
        req.usuarioEmisor = usuarioEmisor;

        req.usuarioReceptor = usuarioReceptor;
        next();
    } else {
        res.status(401).send("Alguno de los usuarios no es correcto");
    }
}

function tieneSaldo(req, res, next) {
    usuarioEmisor = req.usuarioEmisor;
    let saldo = parseInt(usuarioEmisor.saldo);
    let monto = parseInt(req.body.monto);
    if (saldo > monto) {
        req.monto = monto;
        next();
    } else {
        res.status(201).send("No te alcanza cariño");
    }
}

module.exports = {
    verificarUsuario,
    verificarDni,
    logIn,
    tokenValido,
    sonUsuarios,
    tieneSaldo
};
