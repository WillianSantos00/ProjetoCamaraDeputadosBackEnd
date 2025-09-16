const ServiceLegislatura = require("../services/legislaturas");

const service = new ServiceLegislatura;

class ControllerLegislatura{

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

    async PegarLegislaturasLideres(req, res){

        try {
            const {id} = req.params;
             if(req.body){
            const {pagina} = req.body
            const result = await service.PegarLegislaturasLideres(id, pagina);
            res.status(200).send({result})
            }else{
            const result = await service.PegarLegislaturasLideres(id);
            res.status(200).send({result})    
            }
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }

    async PegarLegislaturasMesa(req, res){

        try {

            const {id} = req.params;
            const result = await service.PegarLegislaturasMesa(id);

            res.status(200).send({result})
            
        } catch (error) {
            res.status(500).send({ msg: error.message })
        }

    }


}

module.exports = ControllerLegislatura;