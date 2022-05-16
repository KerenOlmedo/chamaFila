const repositorio = require('../repository/repositoryPaciente')

module.exports = {
    async listar(idPaciente){
        if (idPaciente) {
            const encontrado = await repositorio.buscarId(idPaciente)
            if (!encontrado) {
                throw new Error('ID de busca não encontrado!')
            }
        }
        return await repositorio.listar()
    },

    async inserir(paciente){
        const buscaPaciente = await repositorio.buscarId(paciente.idPaciente)
        if (buscaPaciente) {
            throw new Error('O ID inserido já está em uso')
        }
        return repositorio.inserir(paciente)
    }
};