const express = require("express");
const router = express.houter();

router.get("/users", (req, res) => { 
    res.json(users);
});

module.exports = router;