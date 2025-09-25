const OpsDeputados = require("../api/apiDeputados")

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
        return [dados.dados, ultimaPagina]
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

    async PegarEventos(id, dtInicio, dtFim, pagina){

        if(!dtInicio && !dtFim){
        const dados = await OpsDeputados.fetchEventos(id, pagina);
        const ultimaPagina = recuperaLink(dados);
        return [dados.dados, ultimaPagina];
        }else if(!dtInicio && dtFim){
        const dados = await OpsDeputados.fetchEventos(id, "", dtFim, pagina);
        const ultimaPagina = recuperaLink(dados);
        return [dados.dados, ultimaPagina];
        }else if(dtInicio && !dtFim){
        const dados = await OpsDeputados.fetchEventos(id, dtInicio, "", pagina);
        const ultimaPagina = recuperaLink(dados);
        return [dados.dados, ultimaPagina];
        }else{
        const dados = await OpsDeputados.fetchEventos(id, dtInicio, dtFim, pagina);
        const ultimaPagina = recuperaLink(dados);
        return [dados.dados, ultimaPagina];
        }

        
    }

    async PegarFrentes(id){

        const dados = await OpsDeputados.fetchFrentes(id)
        return dados;

    }

    async PegarHistorico(id){

        const dados = await OpsDeputados.fetchHistorico(id)
        return dados;

    }

    async PegarOcupacoes(id){

        const dados = await OpsDeputados.fetchOcupacoes(id)
        return dados;

    }

    async PegarProfissoes(id){

        const dados = await OpsDeputados.fetchProfissoes(id)
        return dados;

    }


}

module.exports = {ServiceDeputado, recuperaLink};