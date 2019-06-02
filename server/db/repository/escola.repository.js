const escolaModel = require('../model/escola.model');


const addEscola = ( args ) =>{
    const { nome, estado, ano, repasse, detalhamento} = args;
    const newEscola = new escolaModel( { nome, estado, ano, repasse, detalhamento});
    return newEscola.save().then( () =>{
        console.log(`Adicionada escola ${JSON.stringify(args)}`);
    });
};

const findAllEscola = (  ) =>{
    return escolaModel.find({}).exec().then( (result) =>{
        console.log(`Query retornou escolas : ${JSON.stringify(result)}`);
        return result;
    });
};

const findEscola = ( id ) =>{
    return escolaModel.findOne({_id: id}).exec().then( (result) =>{
        console.log(`Query retornou escola : ${JSON.stringify(result)}`);
        return result;
    });
};



module.exports = {addEscola, findAllEscola, findEscola}