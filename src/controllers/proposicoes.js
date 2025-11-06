const ServiceProposicoes = require("../services/proposicoes")

const service = new ServiceProposicoes();

class ControllerProposicoes{

async PegarProposicaoDeputado(req, res){

        try{
            const {idDeputado} = req.params;
            if(req.body){
            const {pagina} = req.body
            const result = await service.PegarProposicaoDeputado(idDeputado, pagina);
            res.status(200).send({result})
            }else{
            const result = await service.PegarProposicaoDeputado(idDeputado);
            res.status(200).send({result})    
            }

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async PegarProposicaoId(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarProposicaoId(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = ControllerProposicoes;