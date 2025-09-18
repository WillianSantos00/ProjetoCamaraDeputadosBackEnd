const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/eventos";

class OpsEventos{

    async fetchAll(dtInicio = "", dtFim = "", pagina = 1, itens = 15) {
        try{   
            if(dtInicio != "" && dtFim != ""){
                const response = await axios.get(URL+"?dataInicio="+dtInicio+"&dataFim="+dtFim+"&pagina="+pagina+"&itens="+itens);
                return response.data;
                }else if(dtInicio != "" && dtFim ==""){
                const response = await axios.get(URL+"?dataInicio="+dtInicio+"&pagina="+pagina+"&itens="+itens);
                return response.data;
                }else if(dtInicio == "" && dtFim !=""){
                const response = await axios.get(URL+"?dataFim="+dtFim+"&pagina="+pagina+"&itens="+itens);
                return response.data;
                }else{
                const response = await axios.get(URL+"?pagina="+pagina+"&itens="+itens);
                return response.data;
                    }
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    }

    async fetchById(id){
         try{   
            const response = await axios.get(URL+"/"+id);
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }

    async fetchEventosDeputados(id){
         try{   
            const response = await axios.get(URL+"/"+id+"/deputados");
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }



}

module.exports = new OpsEventos;