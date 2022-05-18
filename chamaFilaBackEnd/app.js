require('dotenv').config()
const cors = require("cors")
const express = require('express');
const app = express();
const pacientes = require('./src/controller/controllerPaciente')

app.use(express.json())
app.use(cors())
app.use('/pacientes', pacientes)
app.listen(process.env.PORT || 3001, () => console.log('Servidor rodando...'))