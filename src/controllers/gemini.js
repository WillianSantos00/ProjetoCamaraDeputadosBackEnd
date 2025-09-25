const service = require("../services/gemini")

class ControllerGemini{

    async resumoGeralDeputado(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoGeralDeputado(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async resumoDespesas(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoDespesas(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async resumoDiscursos(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoDiscursos(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async resumoEventos(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoEventos(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async resumoHistorico(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoHistorico(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async resumoProposicoes(req, res){

        try{
            const {id} = req.params;
            const resumo = await service.resumoProposicoes(id)
            res.status(200).send({resumo})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }


}

module.exports = new ControllerGemini();