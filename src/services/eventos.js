const OpsEventos = require("../api/apiEventos")
const {recuperaLink} = require("../services/deputados")

class ServiceEventos{

   async PegarTodos(dtInicio, dtFim, pagina){
   
           if(!dtInicio && !dtFim){
           const dados = await OpsEventos.fetchAll("", "", pagina);
           const ultimaPagina = recuperaLink(dados);
           return [dados.dados, ultimaPagina];
           }else if(!dtInicio && dtFim){
           const dados = await OpsEventos.fetchAll("", dtFim, pagina);
           const ultimaPagina = recuperaLink(dados);
           return [dados.dados, ultimaPagina];
           }else if(dtInicio && !dtFim){
           const dados = await OpsEventos.fetchAll(dtInicio, "", pagina);
           const ultimaPagina = recuperaLink(dados);
           return [dados.dados, ultimaPagina];
           }else{
           const dados = await OpsEventos.fetchAll(dtInicio, dtFim, pagina);
           const ultimaPagina = recuperaLink(dados);
           return [dados.dados, ultimaPagina];
           }
   
           
       }

       async PegarPorId(id){
       
               const dados = await OpsEventos.fetchById(id)
               return dados.dados;
       
           }

        async PegarEventosDeputados(id){
       
               const dados = await OpsEventos.fetchEventosDeputados(id)
               return dados.dados;
       
           }


}

module.exports = ServiceEventos;