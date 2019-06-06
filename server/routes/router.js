const router = require('express').Router();
const _ = require('lodash');
const EscolaRepository = require('../db/repository/escola.repository');

router
    .get('/', (req, res) => {
        EscolaRepository.findAllEscola()
            .then(escolas => {
                res.render('index', { escolas });
            });
    })
    .get('/about', (req, res) => {
        res.render('about');
    })
    .get('/colabore', (req, res) => {
        res.render('colabore');
    })
    .get('/pdde', (req, res) => {
        res.render('pdde');
    })
    .get('/escolas', (req, res) => {
        res.render('escolas');
    })
    .get('/escolas/:id', (req, res) => {
        EscolaRepository.findEscola(req.params.id)
            .then(escola => {
                if (!_.isEmpty(escola)) {
                    res.render('detalhesEscola', { escola });
                } else {
                    res.status(404).render('404', { error : {text : "Escola não encontrada"}});
                }
            })
    })
    .post('/escolas', (req, res) => {
        const { nome, estado, ano, repasse , descricao, valor, tipo} = req.body;
        const detalhamento = [];
        console.log(req.body);
        

        if(_.isArray(descricao)){
            descricao.forEach( (el, index) =>{
                detalhamento.push({ descricao : el, valor: valor[index], tipo: tipo[index] });
            })
        }else{
            detalhamento.push({ descricao, valor, tipo });
        }


        EscolaRepository.addEscola({ nome, estado, ano, repasse, detalhamento })
            .then(() => {
                res.status(201).render('escolas');
            }).catch( () => {
                res.status(500).send('Falha ao inserir escola');
            });
    })
module.exports = router;