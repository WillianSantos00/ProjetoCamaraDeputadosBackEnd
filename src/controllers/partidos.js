const ServicePartido = require("../services/partidos");

const service = new ServicePartido();

class ControllerPartidos{

    async PegarTodos(req, res){

        try{

            const result = await service.PegarTodos();
            res.status(200).send({result})

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

    async PegarPartidoLideres(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarPartidoLideres(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarPartidoMembros(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarPartidoMembros(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }


}

module.exports = ControllerPartidos;