const express = require("express");
const cors = require("cors")
const deputadoRouter = require("./src/routes/deputados.js");
const proposicoesRouter = require("./src/routes/proposicoes.js");
const partidosRouter = require("./src/routes/partidos.js");
const legislaturasRouter = require("./src/routes/legislaturas.js");
const eventosRouter = require("./src/routes/eventos.js");
const usuarioRouter = require("./src/routes/usuario.js");
const geminiRouter = require("./src/routes/gemini.js")
const database = require("./src/database.js");

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost', 'http://localhost:80']
}));


app.use(deputadoRouter);
app.use(proposicoesRouter);
app.use(partidosRouter);
app.use(legislaturasRouter)
app.use(eventosRouter)
app.use(geminiRouter)
app.use(usuarioRouter)

const porta = 3000

database.db
    .sync({force: false})
    .then((_) => {
        app.listen(porta, () =>{

    console.log("Serviço rodando na porta "+porta)

})
    })
    .catch((e) =>{
        console.log(`Não foi possível conectar com o banco: ${e}`)
    })


