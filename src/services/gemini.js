const OpsGemini = require("../api/apiGemini")

class ServiceGemini{

    async resumoGeralDeputado(id){

        const resumo = OpsGemini.resumoGeralDeputado(id)
        return resumo

    }

     async resumoDespesas(id){

        const resumo = OpsGemini.resumoDespesas(id);
        return resumo;

    }

     async resumoDiscursos(id){

        const resumo = OpsGemini.resumoDiscursos(id);
        return resumo;

    }

     async resumoEventos(id){

        const resumo = OpsGemini.resumoEventos(id);
        return resumo;

    }

    async resumoHistorico(id){

        const resumo = OpsGemini.resumoHistorico(id);
        return resumo;

    }

     async resumoProposicoes(id){

        const resumo = OpsGemini.resumoProposicoes(id);
        return resumo;

    }

}

module.exports = new ServiceGemini();