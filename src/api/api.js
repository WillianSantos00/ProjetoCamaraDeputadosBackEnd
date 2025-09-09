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
            const response = await axios.get(URL+"deputados/"+id+"/despesas?ano="+ano+"&mes="+mes);
            return response.data;
        }else if(ano != "" && mes ==""){
            const response = await axios.get(URL+"deputados/"+id+"/despesas?ano="+ano);
            return response.data;
        }else if(ano == "" && mes !=""){
            const response = await axios.get(URL+"deputados/"+id+"/despesas?mes="+mes);
            return response.data;
        }else{
            const response = await axios.get(URL+"deputados/"+id+"/despesas"+"?pagina="+pagina+"&itens="+itens);
            return response.data;
        }
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}
}

module.exports = new OpsDeputados; 