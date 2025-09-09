const ServiceDeputado = require("../services/deputados");

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
            const result = await service.PegarDespesas(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }


}

module.exports = ControllerDeputados;