const usuario = require("../model/usuario");

class ServiceUsuario{

    async Criar(email, telefone){

        if(!email){
            throw new Error("Favor informar o e-mail")
        }else if(!telefone){
            throw new Error("Favor informar o telefone")
        }

        await usuario.create({
            email, telefone
        })

    }

}

module.exports = new ServiceUsuario();