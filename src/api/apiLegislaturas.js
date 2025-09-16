const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/legislaturas";

class OpsLegislaturas{

    async fetchAll() {
        try{   
            const response = await axios.get(URL+"?itens=100");
            return response.data;
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

    async fetchLegislaturasLideres(id, pagina=1, itens=15){
         try{   
            const response = await axios.get(URL+"/"+id+"/lideres?pagina="+pagina+"&itens="+itens);
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }

    async fetchLegistalurasMesas(id){
         try{   
            const response = await axios.get(URL+"/"+id+"/mesa");
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }


}

module.exports = new OpsLegislaturas;