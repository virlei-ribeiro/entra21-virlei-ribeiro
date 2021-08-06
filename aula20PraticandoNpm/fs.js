// O módulo fs nos permite interagir com o file system.
/* const fs = require("fs");
const fsPromises = require("fs/promises");
const path = require("path");

// Obtendo as informações de um arquivo (Callback)
fs.stat(path.resolve(__dirname, "indexCowsay.js"), (err, stats) => {
    if (err) {
        return console.log(err.message);        
    }

    // Saber se é um arquivo
    console.log(stats.isFile());
    // Saber se é um diretório
    console.log(stats.isDirectory());
    // Saber o tamanho em bytes
    console.log(stats.size + "B");    
});

// Obtendo as informações de um arquivo (Promise)
(async () => {
    try {
        const stats = await fsPromises.stat(path.resolve(__dirname, "./teste.txt"));

        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.size + "B");
    } catch (err) {
        console.log(err.message);
    }
})(); */

/*  Exercício 1: Lendo as informações de um arquivo (Promise)
1) Crie um script que leia o arquivo exercioNomes.txt e mostra todos os nomes que começam com a letra A
presentes no arquivo.

Obs.: Nome e sobrenome. */ 

/* const fsp = require("fs/js");
const path = require("path");
const { EOL } = require("os");

(async () => {
    try {
        const data = await fsp.readFile(path.resolve(__dirname, "exercicioNomes.txt"));
        
        const nomes = data.toString("utf-8").split(EOL);

        console.log(nomes.filter(nome => nome[0].toUpperCase() === "A"));        
    } catch (err) {
        console.log(err.message);
    }
})(); */

/* 
2) Exercício :  Crie uma função getUserByName(name) que retorne o usuário obtido através do arquivo "users.json". Caso o usuário
não exista a função deve retornar undefined.

Se o usuário existir mostrar as informações do usuário no seguinte formato:
Usuário encontrado: 
nome: [nome do usuário]
idade: [idade do usuário]
email: [email do usuário]

Caso o usuário não existir mostrar a mensagem: "Usuário não foi encontrado." */ 

async function getUserByName(name) { // criou a funçao getUserByName !!
    // 1) Ler o arquivo
    const data = (await fsp.readFile(path.resolve("users.json"))).toString("utf-8");    // na VAR definido o Caminho (path.resolve("users.json") 
    
    // 2) Converter o JSON recebido para objeto
    const users = JSON.parse(data);    // mudou a const users = JSON.parse objetos !!
    
    // 3) Usar o método find dos vetores para procurar o nome
   const user = users.find(user => user.nome === name);

   // 4) Retornar o que foi encontrado
   return user;
}

(async () => {
   // 5) Chamar a função
   const user = await getUserByName("Pedr");
   
   // 6) Verificar se o usuário foi encontrado 
   //      * Se foi encontrado mostrar os dados dele
   //      * Se não foi encontrado mostrar "Usuário não encontrado"
   if (user) {
       console.log(`Usuário encontrado:\nnome: ${user.nome}\nidade: ${user.idade}\nemail: ${user.email}`);
   } else {
       console.log("Usuário não encontrado");
   }
})();


/* 3) Faça um script que leia o arquivo exercioNomes.txt e utilize a biblioteca chalk (https://www.npmjs.com/package/chalk) para
mostrar os nomes que começam com a letra A em vermelho, os nomes que começam com a letra C em azul e os
nomes que começam com a letra D em magenta.

*/