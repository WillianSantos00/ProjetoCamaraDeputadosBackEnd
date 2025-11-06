const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/partidos";

class OpsPartidos{

    async fetchAll() {
        try{   
            const response = await axios.get(URL);
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

    async fetchPartidoLideres(id){
         try{   
            const response = await axios.get(URL+"/"+id+"/lideres");
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }

    async fetchPartidoMembros(id){
         try{   
            const response = await axios.get(URL+"/"+id+"/membros");
            return response.data;
        }catch(error){
            console.log("Erro ao consumir API: ", error)
        }
    
    }


}

module.exports = new OpsPartidos