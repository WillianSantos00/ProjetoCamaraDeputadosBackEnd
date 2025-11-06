const serviceUsuario = require("../services/usuario")

class ControllerUsuario{

    async Criar(req, res){

        try{

            const {email, telefone} = req.body
            await serviceUsuario.Criar(email, telefone)
            res.status(201).send()

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

    async EnviarEmails(req, res){

         try{

            const result = serviceUsuario.EnviarEmails()
           
            res.status(200).send(result)

        }catch(error){

        }
        res.status(500).send({ msg: error.message })

    }

}

module.exports = ControllerUsuario;