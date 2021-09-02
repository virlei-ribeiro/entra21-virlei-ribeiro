const {Post }= require("../db/models"); // importar o arquivo (requerimento que está no bd("../db/models");

async function updatePost (req,res,next) {  // função acyncroma na atualização updatePost (requerimento, resposta e next proximo arq) {}
    
    const { title, content } = req.body; // dentro da Var nome = recebe do requerimento dentro do corpo da pag!!
    const postId = req.params.id;  // na var postId = recebe do requerimento: como parametro o Id !!
    try {
        const post = await Post.findOne({ // na var post = aguardar até encontrar uma postagem(findOne)
            where: { id: postId } // onde: neste id : foi postado!!
        });

        if (!post) { // condição Si não existe ??
            return res.status(404).json({ message: "post not found" }); // retorna Resposta.status(404).json({mensage: "post not found"})
        }

        post.title = title; // chamar a função title
        post.content = content; // chamar a função texto contente 

        await post.save(); // aguarda a salva a função 

        res.json(post); // resposta do objeto json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }
  
}

async function deletePost(req, res, next) {
    // Obter o id dos parametros
    const postId = req.params.id;

    // Verificar se o usuario com aquele id existe
    try {
        const post = await Post.findOne({
            where: { id: postId }
        });

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        // Remover o usuario do bd ()
        await post.destroy();

        res.status(204).end();
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server error" });
    }

}
// defino quais objetos Module será exportado ?? neste caso (updatePost)
module.exports = {
    updatePost,
    deletePost
}