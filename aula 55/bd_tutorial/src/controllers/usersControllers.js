const { User, Post } = require("../db/models");

async function getAllUsers(req, res, next) {
    try {
        const users = await User.findAll();

        res.json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

async function getUserById(req, res, next) { // funçao Assincrona adicionado async !
    const userId = req.params.id;   // definido o Id do usuário para fazer alterações !! no requerimento !!

    try { // try variavel usuario = aguardar o sistema encontrar ele no FindOne ({ onde})
        const user = await User.findOne({ // aguardar await
            where: { id: userId }  // onde where: o id: usuarioId
        });


        if (!user) { // condição Si (!Usuario)
            res.status(404).json({ message: "User not found!" }); // Resposta estatus (404).json({"user não encontrado"})
        }


        res.json(user); // retorna a resposta . json(usuário)
    } catch (err) { // considera o erro catch (err) 
        console.log(err); // mostra o erro !! console
        res.status(500).json({ message: "Server error" }); // imprime a resposta
    }
}

async function createUser(req, res, next) {
    const { name, email, password } = req.body;


    // Verificando se o e-mail já está cadastrado no BD
    try {
        const [user, created] = await User.findOrCreate({
            where: { email },
            defaults: {
                name,
                password
            }
        });

        if (!created) {
            return res.status(409).json({ message: "User already exists" });
        }

        res.status(201).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }

}

async function updateUser(req, res, next) { // update modifica o usuário !! ou qualquer Const
    const { name } = req.body; // dentro da Var nome = recebe do requerimento 
    const userId = req.params.id;
    try {
        const user = await User.findOne({
            where: { id: userId }
        });

        if (!user) { // se não existe 
            return res.status(404).json({ message: "User not found" });
        }

        user.name = name;
        await user.save();

        res.json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }

}

async function deleteUser(req, res, next) {
    // Obter o id dos parametros
    const userId = req.params.id;

    // Verificar se o usuario com aquele id existe
    try {
        const user = await User.findOne({
            where: { id: userId }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remover o usuario do bd ()
        await user.destroy();

        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }

}
async function createPost(req, res, next) {
    const userId = req.params.id;
    const { title, content } = req.body;
    const file = req.file;

    let image;
    if (file) {
        image = `${process.env.APP_URL}/static/${file.filename}`;
    }

    try {
        const user = await User.findOne({ where: { id: userId } });



        if (!user) {
            return res.status(404).json({ message: "User not found!" });

        }

        const post = await Post.create({
            title,
            content,
            image,
            user_id: userId
        });

        res.status(201).json(post);

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    createPost
};