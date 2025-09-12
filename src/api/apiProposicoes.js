const { default: axios } = require("axios");

const URL = "https://dadosabertos.camara.leg.br/api/v2/proposicoes";

class OpsProposicoes{

async fetchProposicaoDeputado(idDeputado, pagina = 1, itens = 15) {
    try{   
        const response = await axios.get(URL+"?idDeputadoAutor="+idDeputado+"&pagina="+pagina+"&itens="+itens);
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }
}


async fetchProposicaoId(id){
     try{   
        const response = await axios.get(URL+"/"+id);
        return response.data;
    }catch(error){
        console.log("Erro ao consumir API: ", error)
    }

}


}

module.exports = new OpsProposicoes;