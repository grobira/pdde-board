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
                    res.status(404).send('404 Not Found')
                }
            })
    })
    .post('/escolas', (req, res) => {
        const { nome, estado, ano, repasse } = req.body;
        const { descricao, valor } = req.body;
        const detalhamento = [];

        detalhamento.push({ descricao, valor });

        console.log(req.body);
        const arr = new Array(10).fill(0);
        arr.forEach((val, index) => {
            if (req.body[`descricao${index}`]) {
                const desc = _.get(req, 'body.descricao' + index);
                const val = _.get(req, 'body.valor' + index);

                detalhamento.push({ descricao : desc, valor: val });
            }
        });

        EscolaRepository.addEscola({ nome, estado, ano, repasse, detalhamento })
            .then(() => {
                res.status(201).render('escolas');
            }).catch(err => {
                console.err(err);
                res.status(500).send('Falha ao inserir escola');
            });
    })
module.exports = router;