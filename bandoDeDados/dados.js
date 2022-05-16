const {Sequelize} = require('sequelize');
const instancia = new Sequelize(
    "fila",
    "root",
    "123456",
    {
        host:"localhost",
        dialect:"mysql"
    }
);

module.exports = instancia;