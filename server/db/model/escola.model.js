const mongoose = require('mongoose');

const detalhesSchema = new mongoose.Schema({
    descricao: {
        type: String
    },
    valor: {
        type: String
    },
})
const escolaSchema = new mongoose.Schema({
    nome: {
        type: String,
    },
    estado: {
        type: String,
    },
    ano: {
        type: Number,
    },
    repasse: {
        type: String,
    },
    detalhamento: {
        type: [detalhesSchema],
    },
})

const escola = mongoose.model('escola', escolaSchema);

module.exports = escola;