const OpsProposicoes = require("../api/apiProposicoes")
const {recuperaLink} = require("../services/deputados")

class ServiceProposicoes{

     async PegarProposicaoDeputado(idDeputado, pagina){
    
            const dados = await OpsProposicoes.fetchProposicaoDeputado(idDeputado, pagina)
            const ultimaPagina = recuperaLink(dados)
            return [dados.dados, ultimaPagina]
    
        }
    
        async PegarProposicaoId(id){
    
            const dados = await OpsProposicoes.fetchProposicaoId(id)
            return dados.dados;
    
        }


}

module.exports = ServiceProposicoes;