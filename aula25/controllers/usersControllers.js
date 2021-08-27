const users = require("../models/user"); 

function getAllUsers(req, res, next) { // Defini a function a ser executados!!
    res.json(users); 
}


function getUserById(req, res, next) {
    const userId = req.params.id;

    const user = users.find(user => user.id == userId);

    if (!user) {
        res.status(404).json({ message: "User not found!" });
    }
}

function createUser(req, res, next) {
    const { id, name, email } = req.body

    const userAlreadyExists = users.find(user => user.email === email);
    if (userAlreadyExists) {
        return res.status(409).json({ mensage: "User already exists" });
    }

    const user = { id, name, email };

    // inserindo Usuario
    users.push({ id, name, email });
    res.status(201).json(user);
}

function updateUser (req, res, next) {
     const { name } = req.body;   
    const userId = req.params.id;
    const user = users.find(user => user.id == userId); 

    if (!user) {
        return res.status(404).json({ mensage: "user not find" });
    }

    user.name = name; // chama a função 
    res.json(user); // sempre precisa de uma resposta  requerimento !!

}
function deleteUser (req, res, next) {
    const userId = req.params.id;
    
    const userIdInDB = users.findIndex(user => user.id == userId);
    if (userIdInDB < 0) {
        return res.status(404).json({ message: "User not found" });
    }
    
    users.splice(userIdInDB, 1);
    res.status(204).end(); 
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

};