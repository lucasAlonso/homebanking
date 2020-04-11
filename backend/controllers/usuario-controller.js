let Usuario = require('../models/usuario-model');

function postUsuario(req, res) {
    const usuarioDB = new Usuario(req.body);
    usuarioDB
        .save()
        .then((resultado) => {
            res.status(201).send();
        })
        .catch((err) => {
            res.status(540).send();
        });
}
function getUsuarios(req, res) {
    Usuario.find()
        .then((usuarios) => {
            res.json(usuarios);
        })
        .catch((err) => {
            res.status(500).send();
        });
}

function getUser(req, res) {
    userToFind = req.usuario;
    res.json(usuario);
}

function postLogin(req, res) {
    res.status(200).json(req.token);
}

function getUserFromDB(user) {
    const encontrado = usuarios.find((element) => element.usuario === user);
    return encontrado;
}

function postDeposito(req, res) {
    usuarioSalidoDelToken = req.usuario;
    const monto = parseInt(req.body.monto);
    usuario = getUserFromDB(usuarioSalidoDelToken);
    usuario.saldo = parseInt(usuario.saldo) + monto;
    let enviar = JSON.stringify({ saldo: usuario.saldo });
    res.status(200).send(enviar);
}
function postTransferencia(req, res) {
    let usuarioEmisor = req.usuarioEmisor;
    let usuarioReceptor = req.usuarioReceptor;

    let monto = parseInt(req.body.monto);
    usuarioEmisor.saldo = parseInt(usuarioEmisor.saldo) - monto;
    usuarioReceptor.saldo = parseInt(usuarioReceptor.saldo) + monto;

    res.status(200).send(
        JSON.stringify({
            saldoEmisor: usuarioEmisor.saldo,
            saldoReceptor: usuarioReceptor.saldo,
        })
    );
}

module.exports = {
    postUsuario,
    getUsuarios,
    getUser,
    postLogin,
    postDeposito,
    postTransferencia,
};
