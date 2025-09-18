const ServiceEventos = require("../services/eventos");

const service = new ServiceEventos();

class ControllerEventos{

    async PegarTodos(req, res){

        try {

            if(req.body){
            const {dtInicio, dtFim, pagina} = req.body
            const result = await service.PegarTodos(dtInicio, dtFim, pagina);
            res.status(200).send({result})
            }else{
            const result = await service.PegarTodos();
            res.status(200).send({result})
            }
            
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

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

    async PegarEventosDeputados(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarEventosDeputados(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

}

module.exports = ControllerEventos;