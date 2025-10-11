const express = require('express');
const deputadoRouter = require("./src/routes/deputados.js");
const proposicoesRouter = require("./src/routes/proposicoes.js");
const partidosRouter = require("./src/routes/partidos.js");
const legislaturasRouter = require("./src/routes/legislaturas.js")
const eventosRouter = require("./src/routes/eventos.js")

const app = express();

app.use(express.json());


app.use(deputadoRouter);
app.use(proposicoesRouter);
app.use(partidosRouter);
app.use(legislaturasRouter)
app.use(eventosRouter)

const porta = 3000
app.listen(porta, () =>{

    console.log("Serviço rodando na porta "+porta)

})

app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'API da Câmara dos Deputados rodando no Docker!',
        status: 'OK',
        api_version: '1.0'
    });
});