let Cuenta = require("../models/cuenta-model");
function altaCuenta(req, res) {
    const cuentaDB = new Cuenta(req.body);
    cuentaDB
        .save()
        .then(resultado => {
            res.status(201).send();
        })
        .catch(err => {
            res.status(540).send();
        });
}
function getCuentas(req, res) {
    Cuenta.find({ ownerId: req.idUser })
        .then(cuentas => {
            res.json(cuentas);
        })
        .catch(err => {
            res.status(500).send();
        });
}
/* function hacerDeposito(req,res) {
    const cuentaDB = new Usuario(req.body);
    Cuenta.findOne({ _id: cuentaId })
        .then(cuentaFinded => {
            if (cuentaFinded[0]) {
                let contenido = { usuario: userSend };
                let token = jwt.sign(contenido, firma);
                req.token = { token: token };
                next();
            } else {
                res.status(401).send("Algunos de los datos no son correctos");
            }
        })
        .catch(err => {
            res.status(500).send();
        }); 
}*/

module.exports = {
    altaCuenta,
    getCuentas
};
