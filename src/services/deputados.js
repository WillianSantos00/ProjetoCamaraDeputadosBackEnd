const OpsDeputados = require("../api/api")

function recuperaLink(dados){
    const links = dados.links;
        var filtroUltimaPagina = links.filter(obj => (
            obj.rel == "last"
         ))
        const stringUltimaPagina = filtroUltimaPagina[0].href;
        const IndicePagina = stringUltimaPagina.indexOf("pagina");
        const IndiceItens = stringUltimaPagina.indexOf("itens");
        const ultimaPagina = Number(stringUltimaPagina.slice(IndicePagina+7, IndiceItens - 1));
        return ultimaPagina;
}

class ServiceDeputado{

    async PegarTodos(){

        const dados = await OpsDeputados.fetchAll()
        const deputado = (dados.dados).map(({id, nome, siglaPartido, siglaUf, urlFoto}) => 
    ({id, nome, siglaPartido, siglaUf, urlFoto}))
        console.log(deputado)
        return deputado

    }

    async PegarPorId(id){

        const dados = await OpsDeputados.fetchById(id)
        return dados;

    }

    async PegarDespesas(id, ano, mes, pagina){

       
        if(!ano && !mes){
        const dados = await OpsDeputados.fetchDespesas(id, "", "", pagina);
        const ultimaPagina = recuperaLink(dados);
        return [dados.dados, ultimaPagina];
        }else if(!ano && mes){
        const dados = await OpsDeputados.fetchDespesas(id, "", mes, pagina);
        const ultimaPagina = recuperaLink(dados)
        return [dados.dados, ultimaPagina];
        }else if(ano && !mes){
        const dados = await OpsDeputados.fetchDespesas(id, ano, "", pagina);
        const ultimaPagina = recuperaLink(dados)
        return [dados.dados, ultimaPagina];
        }else{
        const dados = await OpsDeputados.fetchDespesas(id, ano, mes, pagina);
        const ultimaPagina = recuperaLink(dados)
        return [dados.dados, ultimaPagina];
        }
        
        

    }

    async PegarDiscursos(id, dtInicio, dtFim){

        if(!dtInicio && !dtFim){
        const dados = await OpsDeputados.fetchDiscursos(id);
        return dados.dados;
        }else if(!dtInicio && dtFim){
        const dados = await OpsDeputados.fetchDiscursos(id, "", dtFim);
        return dados.dados;
        }else if(dtInicio && !dtFim){
        const dados = await OpsDeputados.fetchDiscursos(id, dtInicio, "");
        return dados.dados;
        }else{
        const dados = await OpsDeputados.fetchDiscursos(id, dtInicio, dtFim);
        return dados.dados;
        }

        
    }


}

module.exports = ServiceDeputado;