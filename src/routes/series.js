var express = require("express");
var router = express.Router();

var serieController = require("../controllers/serieController");

router.post("/cadastrarSerie", function (req, res) {
    serieController.cadastrarSerie(req, res);
})

router.post("/avaliarSerie", function (req, res) {
    serieController.avaliarSerie(req, res);
})

router.get("/listarSerie", function(req, res){
    serieController.listarSerie(req, res);
})

module.exports = router;