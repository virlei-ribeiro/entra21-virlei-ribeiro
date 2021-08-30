const express = require("express");
const router = express.Router();

//importando o controller 
const usersControllers = require ("../controllers/usersControllers");

router.get("/", usersControllers.getAllUsers);

router.get("/:id", usersControllers.getUserById);

router.put("/:id", usersControllers.updateUser);

router.post("/", usersControllers.createUser);

router.delete("/:id", usersControllers.deleteUser);   

module.exports = router;