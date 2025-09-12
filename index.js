const express = require("express");
const deputadoRouter = require("./src/routes/deputados.js");
const proposicoesRouter = require("./src/routes/proposicoes.js");


const app = express();

app.use(express.json());

app.use(deputadoRouter);
app.use(proposicoesRouter);

const porta = 3000
app.listen(porta, () =>{

    console.log("Serviço rodando na porta "+porta)

})