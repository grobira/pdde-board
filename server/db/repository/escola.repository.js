const escolaModel = require('../model/escola.model');


const addEscola = (args) => {
    const { nome, estado, ano, repasse, detalhamento } = args;
    const newEscola = new escolaModel({ nome, estado, ano, repasse, detalhamento });
    return newEscola.save().then(() => {
        console.log(`Adicionada escola ${JSON.stringify(args)}`);
    })
    .catch(err =>{
        console.error(err)
        console.log('Erro ao adicionar escolas');
        throw err;
    });
};

const findAllEscola = () => {
    return escolaModel.find({}).exec().then((result) => {
        console.log(`Query retornou escolas : ${JSON.stringify(result)}`);
        return result;
    })
    .catch(err =>{
        console.log('Erro ao buscar escolas');
        throw err;
    });
};

const findEscola = (id) => {
    return escolaModel.findOne({ _id: id }).exec().then((result) => {
        console.log(`Query retornou escola : ${JSON.stringify(result)}`);
        return result;
    }).catch(() => {
        console.log('Escola não encontrada');
        return [];
    });
};



module.exports = { addEscola, findAllEscola, findEscola }