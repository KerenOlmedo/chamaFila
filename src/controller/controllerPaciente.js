const router = require('express').Router()
const repository = require('../repository/repositoryPaciente')

router.get('/', async (req, res) => {
    const paciente = await repository.listar()
    res.send(paciente)
});

router.post('/', (req, res) => {
    const paciente = req.body
    repository.inserir(paciente)
    res.send("Paciente inserido!")
});

module.exports = router