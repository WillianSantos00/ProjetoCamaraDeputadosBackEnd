const { GoogleGenAI } = require("@google/genai");
const OpsDeputados = require("./apiDeputados");
const OpsProposicoes = require("./apiProposicoes")

const ai = new GoogleGenAI({apiKey:"AIzaSyBokVGKsjRCBJSkxwPJITBp3kyfXy8E0Xo"});

class GeminiOps{

async resumoGeralDeputado(id) {
    
    var infoDeputado = await OpsDeputados.fetchById(id)
    var infoDeputado = JSON.stringify(infoDeputado);
    var infoFrentes = await OpsDeputados.fetchFrentes(id);
    var infoFrentes = JSON.stringify(infoFrentes);
    const prompt = "Resuma as informações deste deputado com uma linguagem simples em um só texto:"+infoDeputado
    +"E relacione com 3 principais frentes de atuação:"+infoFrentes
    +"E explique brevemente qual é a inclinação política do partido dele";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoDespesas(id) {
    
    var infoDespesas = await OpsDeputados.fetchDespesas(id);
    var infoDespesas = JSON.stringify(infoDespesas);
    const prompt = "Resuma as informações sobre estas despesas recentes:"+infoDespesas
    +"e faça uma média do dinheiro gasto";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoDiscursos(id) {
    
    var infoDiscursos = await OpsDeputados.fetchDiscursos(id);
    var infoDiscursos = JSON.stringify(infoDiscursos);
    const prompt = "Resuma em um parágrafo as informações sobre os discursos recentes do deputado utilizando linguagem simples e explicando termos técnicos:"+infoDiscursos
    +"Caso esteja vazio, retorne que o deputado não possui discursos recentes";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoDiscursos(id) {
    
    var infoDiscursos = await OpsDeputados.fetchDiscursos(id);
    var infoDiscursos = JSON.stringify(infoDiscursos);
    const prompt = "Resuma em um parágrafo as informações sobre os discursos recentes do deputado utilizando linguagem simples e explicando termos técnicos:"+infoDiscursos
    +"Caso esteja vazio, retorne que o deputado não possui discursos recentes";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoEventos(id) {
    
    var infoEventos = await OpsDeputados.fetchEventos(id);
    var infoEventos = JSON.stringify(infoEventos);
    const prompt = "Faça um resumo de no máximo um parágrafo dos eventos que o deputado irá participar. Utilize linguagem simples e explique termos técnicos:"+infoEventos ;
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoHistorico(id) {
    
    var infoHistorico = await OpsDeputados.fetchHistorico(id);
    var infoHistorico = JSON.stringify(infoHistorico);
    var infoOcupacoes = await OpsDeputados.fetchOcupacoes(id);
    var infoOcupacoes = JSON.stringify(infoOcupacoes);
    var infoProfissoes = await OpsDeputados.fetchProfissoes(id);
    var infoProfissoes = JSON.stringify(infoProfissoes);
    const prompt = "Faça um resumo do histórico do(a) deputado(a):"
    +infoHistorico+". Junte com as ocupações:"+infoOcupacoes
    +"e por fim com as Profissões:"+infoProfissoes+". Dê enfase na carreira política. Ignore o fato da pessoa não ser especificada. Evite usar muitas linhas";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

async resumoProposicoes(id) {
    
    var infoProposicoes = await OpsProposicoes.fetchProposicaoDeputado(id);
    var infoProposicoes = JSON.stringify(infoProposicoes);
    const prompt = "Faça um resumo, em linguagem simples e explicando termos técnicos, das proposições dos últimos 30 dias do(a) deputado(a)"
    +infoProposicoes+". Use no máximo um parágrafo e evite usar muitas linhas";
    const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

}

module.exports = new GeminiOps();