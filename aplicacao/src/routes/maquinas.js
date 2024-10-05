var express = require("express");
var router = express.Router();

var maquinasController = require("../controllers/maquinasController");

router.get("/lista/:fkEmpresa", function (req, res) {
    maquinasController.lista(req, res);
});

router.post("/atualizarNome/:fkEmpresa", function(req,res){
    maquinasController.atualizarNome(req,res);
})

module.exports = router;