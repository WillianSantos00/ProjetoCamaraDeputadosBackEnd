const usuario = require("../model/usuario");
const nodemailer = require("nodemailer");
require("dotenv").config();

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

    async EnviarEmails(){

        const user =  process.env.USER;
        const pass =  process.env.PASS;

        const emails = await usuario.findAll({
            attributes: ['email']
        });
        emails.forEach(element => {
            const destinatario = element.dataValues.email;

            const transporter = nodemailer.createTransport({
                host:"smtp.gmail.com",
                port:587,
                auth: {user, pass}
               })
            
               transporter.sendMail({
                    from: user,
                    to: destinatario,
                    subject: "Atualização de Informações",
                    text: "Olá! Novas informações sobre política estão disponíveis no nosso ambiente!"
               }).then(info=>{
                console.log(info)
               }).catch(error=>{
                console.log(error)
               })
               
            })

        
    }

}

module.exports = new ServiceUsuario();