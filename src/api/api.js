const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/";

class OpsDeputados{
async fetchAll() {
    try{   
        const response = await axios.get(URL+"deputados");
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }
}


async fetchById(id){
     try{   
        const response = await axios.get(URL+"deputados/"+id);
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

async fetchDespesas(id, ano = "", mes = "", pagina = 1, itens = 15){

try{   
        if(ano != "" && mes != ""){
            const response = await axios.get(URL+"deputados/"+id+"/despesas?ano="+ano+"&mes="+mes+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(ano != "" && mes ==""){
            const response = await axios.get(URL+"deputados/"+id+"/despesas?ano="+ano+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(ano == "" && mes !=""){
            const response = await axios.get(URL+"deputados/"+id+"/despesas?mes="+mes+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else{
            const response = await axios.get(URL+"deputados/"+id+"/despesas"+"?pagina="+pagina+"&itens="+itens);
            return response.data;
        }
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }
}
async fetchDiscursos(id, dtInicio = "", dtFim = "", pagina = 1, itens = 15){

    try {
        if(dtInicio != "" && dtFim != ""){
            const response = await axios.get(URL+"deputados/"+id+"/discursos?dataInicio="+dtInicio+"&dataFim="+dtFim);
            return response.data;
        }else if(dtInicio != "" && dtFim ==""){
            const response = await axios.get(URL+"deputados/"+id+"/discursos?dataInicio="+dtInicio);
            return response.data;
        }else if(dtInicio == "" && dtFim !=""){
            const response = await axios.get(URL+"deputados/"+id+"/discursos?dataFim="+dtFim);
            return response.data;
        }else{
            const response = await axios.get(URL+"deputados/"+id+"/discursos");
            return response.data;
        }
    } catch (error) {
        console.log("Erro ao consumir API: ", error)
    }


}
}

module.exports = new OpsDeputados; 