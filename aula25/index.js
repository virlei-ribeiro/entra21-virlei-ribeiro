const { response } = require("express");
const express = require("express");
const app = express(); // app recebe o Express
const PORT = 3000; // porta de acessso entrada!!


const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

app.get("/users", (request, response) => { // call back recebe argumentos !!! response é resposta
    response.json(users);
});

app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }


    res.json(user);
});



app.post("/", (request, response) => { // request = receber do usuário
    response.send("Metodo POST");
});
app.put("/", (request, response) => { // put = inserir ou modificar
    response.send("Metodo PUT");
});
app.delete("/", (request, response) => { // deletar arquivos
    response.send("Metodo DELETE");
});
// Rotas do ususário "/ users"
app.listen(PORT, () => console.log("o servidor está rodando...")); // ouça o arquivo !! sempre última linha