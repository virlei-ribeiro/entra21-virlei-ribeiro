const { response } = require("express");
const express = require("express");
const app = express(); // app recebe o Express
const PORT = 3000; // porta de acessso entrada!!

app.use(express.json());

const users = [
    { id: 1, name: "Pedro", email: "pedro@email.com" },
    { id: 2, name: "João", email: "joao@email.com" },
    { id: 3, name: "Marcos", email: "marcos@email.com" },
];

//importando as Rotas
const usersRoutes = require("./routes/usersRoutes");

//definindo as rotas
app.use("/users", usersRoutes);



// criar usuario


// atualizar informações: precisa definir o "/Users/ :id"
app.put("/users/:id", (req, res) => { // put = inserir ou modificar
    const { name } = req.body;   // para mudar o Usuario, pelo {Name} = verificando no body!!
    const userId = req.params.id;
    const user = users.find(user => user.id == userId); // buscar ou encontrar usuario.encontrando ele (usuario.id == usuarioId // seu codigo cadastro!!)

    if (!user) {
        return res.status(404).json({ mensage: "user not find" });
    }

    user.name = name; // chama a função 
    res.json(user); // sempre precisa de uma resposta  requerimento !!

}); // esta parte foi copiado e importado no CONTROLLER !!!

app.delete("/users/:id", (req, res) => {
    // Obter o id dos parametros
    const userId = req.params.id;
    // Verificar se o usuario com aquele id existe
    const userIdInDB = users.findIndex(user => user.id == userId);
    if (userIdInDB < 0) {
        return res.status(404).json({ message: "User not found" });
    }
    // Remover o usuario do bd ()
    users.splice(userIdInDB, 1);
    res.status(204).end();
}); // esta parte foi copiado e importado no CONTROLLER !!!




// Rotas do ususário "/ users"
app.listen(PORT, () => console.log("o servidor está rodando...")); // ouça o arquivo !! sempre última linha