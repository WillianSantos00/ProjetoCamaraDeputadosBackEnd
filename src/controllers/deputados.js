const ServiceDeputado = require("../services/deputados");

const service = new ServiceDeputado();

class ControllerDeputados{

    PegarTodos(req, res){

        try{

            const deputados = service.PegarTodos();
            res.status(200).json({deputados})

        }catch(error){

        }
        res.status(500).json({error})

    }


}

module.exports = ControllerDeputados;