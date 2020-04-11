let Cuenta = require('../models/cuenta-model');
function altaCuenta(idUser) {}
function hacerDeposito(cuentaId, monto) {
    const cuentaDB = new Usuario(req.body);
    Cuenta.findOne({ _id: cuentaId })
        .then((cuentaFinded) => {
            if (cuentaFinded[0]) {
                let contenido = { usuario: userSend };
                let token = jwt.sign(contenido, firma);
                req.token = { token: token };
                next();
            } else {
                res.status(401).send('Algunos de los datos no son correctos');
            }
        })
        .catch((err) => {
            res.status(500).send();
        });
}
