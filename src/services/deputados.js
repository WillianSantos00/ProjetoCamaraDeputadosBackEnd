const OpsDeputados = require("../api/api")

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
        const despesas = await OpsDeputados.fetchDespesas(id, "", "", 4)
        const todosDados = {dados, despesas}
        return todosDados;

    }

    async PegarDespesas(id, ano, mes){

        const dados = await OpsDeputados.fetchDespesas(id, ano, mes);
        return dados.dados;

    }

}

module.exports = ServiceDeputado;