const express = require("express");
const routers = require("./src/routes/deputados.js")

const app = express();

app.use(express.json());

app.use(routers);

const porta = 3000
app.listen(porta, () =>{

    console.log("Serviço rodando na porta "+porta)

})