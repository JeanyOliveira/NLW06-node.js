import express from 'express';

// @types/express
const app = express();

/**
 * GET    => Buscar informação
 * POST   => Insere informação (cria)
 * PUT    => Altera informação
 * DELETE => Remove dado
 * PATCH  => Altera informações especificas
 */


app.get("/test", (request, response) => {
    //request => entra
    //response => sai
    return response.send("Olá NLW");
});

app.post("/test-post", (request, response) => {

    return response.send("Olá NLW método POST");
});

// http://localhost:3000
app.listen(3000, () => console.log("Server is running"));