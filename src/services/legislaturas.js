const OpsLegislaturas = require("../api/apiLegislaturas.js")
const {recuperaLink} = require("../services/deputados")

class ServiceLegislatura{


     async PegarTodos(){
        
            const dados = await OpsLegislaturas.fetchAll();
            return dados.dados
    
        }
    
    async PegarPorId(id){
    
            const dados = await OpsLegislaturas.fetchById(id);
            return dados.dados;
    
        }

    async PegarLegislaturasLideres(id, pagina){
    
            const dados = await OpsLegislaturas.fetchLegislaturasLideres(id, pagina);
            const ultimaPagina = recuperaLink(dados)
            return [dados.dados, ultimaPagina]
    
        }

    async PegarLegislaturasMesa(id){
    
            const dados = await OpsLegislaturas.fetchLegistalurasMesas(id);
            return dados.dados;
    
        }


}

module.exports = ServiceLegislatura;