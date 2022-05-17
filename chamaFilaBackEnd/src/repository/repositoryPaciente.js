const modelPaciente = require('../model/modelPaciente')

module.exports = {
    async listar(){
        return await modelPaciente.findAll({raw:true})
    },

    inserir (paciente){
        return modelPaciente.create(paciente)
    },

    async buscarId(id){
        return modelPaciente.findOne({
            where:{
                idpacientes: id
            }
        })
    }
}