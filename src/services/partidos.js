const OpsPartidos = require("../api/apiPartidos")

class ServicePartido{


     async PegarTodos(){
        
            const dados = await OpsPartidos.fetchAll();
            return dados.dados
    
        }
    
    async PegarPorId(id){
    
            const dados = await OpsPartidos.fetchById(id);
            return dados.dados;
    
        }

    async PegarPartidoLideres(id){
    
            const dados = await OpsPartidos.fetchPartidoLideres(id);
            return dados.dados
    
        }

    async PegarPartidoMembros(id){
    
            const dados = await OpsPartidos.fetchPartidoMembros(id);
            return dados.dados;
    
        }


}

module.exports = ServicePartido;