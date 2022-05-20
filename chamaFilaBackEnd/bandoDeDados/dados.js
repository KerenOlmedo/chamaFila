const {Sequelize} = require('sequelize');
const instancia = new Sequelize(
    "chamafila",
    "root",
    "123456",
    {
        host:"localhost",
        dialect:"mysql"
    }
);

module.exports = instancia;