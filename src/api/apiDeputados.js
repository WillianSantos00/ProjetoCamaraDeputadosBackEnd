const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/deputados/";

class OpsDeputados{
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
        const response = await axios.get(URL+id);
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

async fetchDespesas(id, ano = "", mes = "", pagina = 1, itens = 15){

try{   
        if(ano != "" && mes != ""){
            const response = await axios.get(URL+id+"/despesas?ano="+ano+"&mes="+mes+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(ano != "" && mes ==""){
            const response = await axios.get(URL+id+"/despesas?ano="+ano+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(ano == "" && mes !=""){
            const response = await axios.get(URL+id+"/despesas?mes="+mes+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else{
            const response = await axios.get(URL+id+"/despesas"+"?pagina="+pagina+"&itens="+itens);
            return response.data;
        }
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }
}
async fetchDiscursos(id, dtInicio = "", dtFim = "", pagina = 1, itens = 15){

    try {
        if(dtInicio != "" && dtFim != ""){
            const response = await axios.get(URL+id+"/discursos?dataInicio="+dtInicio+"&dataFim="+dtFim);
            return response.data;
        }else if(dtInicio != "" && dtFim ==""){
            const response = await axios.get(URL+id+"/discursos?dataInicio="+dtInicio);
            return response.data;
        }else if(dtInicio == "" && dtFim !=""){
            const response = await axios.get(URL+id+"/discursos?dataFim="+dtFim);
            return response.data;
        }else{
            const response = await axios.get(URL+id+"/discursos");
            return response.data;
        }
    } catch (error) {
        console.log("Erro ao consumir API: ", error)
    }


}

async fetchEventos(id, dtInicio = "", dtFim = "", pagina = 1, itens = 15){

    try {
        if(dtInicio != "" && dtFim != ""){
            const response = await axios.get(URL+id+"/eventos?dataInicio="+dtInicio+"&dataFim="+dtFim+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(dtInicio != "" && dtFim ==""){
            const response = await axios.get(URL+id+"/eventos?dataInicio="+dtInicio+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else if(dtInicio == "" && dtFim !=""){
            const response = await axios.get(URL+id+"/eventos?dataFim="+dtFim+"&pagina="+pagina+"&itens="+itens);
            return response.data;
        }else{
            const response = await axios.get(URL+id+"/eventos?pagina="+pagina+"&itens="+itens);
            return response.data;
        }
    } catch (error) {
        console.log("Erro ao consumir API: ", error)
    }


}

async fetchFrentes(id){
     try{   
        const response = await axios.get(URL+id+"/frentes");
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

async fetchHistorico(id){
     try{   
        const response = await axios.get(URL+id+"/historico");
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

async fetchOcupacoes(id){
     try{   
        const response = await axios.get(URL+id+"/ocupacoes");
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

async fetchProfissoes(id){
     try{   
        const response = await axios.get(URL+id+"/profissoes");
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}

}

module.exports = new OpsDeputados; 