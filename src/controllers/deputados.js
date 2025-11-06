const {ServiceDeputado} = require("../services/deputados");

const service = new ServiceDeputado();

class ControllerDeputados{

    async PegarTodos(req, res){

        try{

            const deputados = await service.PegarTodos();
            res.status(200).send({deputados})

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async PegarPorId(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarPorId(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarDespesas(req, res){

        try {

            const {id} = req.params;
            if(req.body){
            const {ano, mes, pagina} = req.body
            const result = await service.PegarDespesas(id, ano, mes, pagina);
            res.status(200).send({result})
            }else{
            const result = await service.PegarDespesas(id);
            res.status(200).send({result})
            }
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarDiscursos(req, res){

        try {

            const {id} = req.params;
            if(req.body){
            const {dtInicio, dtFim} = req.body
            const result = await service.PegarDiscursos(id, dtInicio, dtFim);
            res.status(200).send({result})
            }else{
            const result = await service.PegarDiscursos(id);
            res.status(200).send({result})
            }
            
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarEventos(req, res){

        try {

            const {id} = req.params;
            if(req.body){
            const {dtInicio, dtFim, pagina} = req.body
            const result = await service.PegarEventos(id, dtInicio, dtFim, pagina);
            res.status(200).send({result})
            }else{
            const result = await service.PegarEventos(id);
            res.status(200).send({result})
            }
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }
    
    async PegarFrentes(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarFrentes(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarHistorico(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarHistorico(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarOcupacoes(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarOcupacoes(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarProfissoes(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarProfissoes(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }


}

module.exports = ControllerDeputados;