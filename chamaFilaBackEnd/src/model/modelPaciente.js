const { Sequelize } = require("sequelize");
const instancia = require('../../bandoDeDados/dados')

const colunasPaciente = {
    idclientes: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    codigo: {
        type: Sequelize.STRING,
        allowNull: false
    }
};

const opcoes = {
    tablename: 'pacientes',
    timestamps: true,
    createAt: 'dataCriacao',
    updateAt: 'dataAtualizacao'
};

module.exports = instancia.define('pacientes', colunasPaciente, opcoes);