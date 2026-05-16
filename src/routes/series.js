var express = require("express");
var router = express.Router();

var serieController = require("../controllers/serieController");

router.post("/cadastrarSerie", function (req, res) {
    serieController.cadastrarSerie(req, res);
})

router.post("/avaliarSerie", function (req, res) {
    serieController.avaliarSerie(req, res);
})

router.get("/listarSerieAcao", function(req, res){
    serieController.listarSerieAcao(req, res);
})

router.get("/listarSerieTerror", function(req, res){
    serieController.listarSerieTerror(req, res);
})

router.get("/listarSerieComedia", function(req, res){
    serieController.listarSerieComedia(req, res);
})

router.get("/listarSerieSerialKiller", function(req, res){
    serieController.listarSerieSerialKiller(req, res);
})

router.get("/listarSerieDorama", function(req, res){
    serieController.listarSerieDorama(req, res);
})

router.get("/listarSerieFiccao", function(req, res){
    serieController.listarSerieFiccao(req, res);
})

router.get("/listarSerieFiccaoCientifica", function(req, res){
    serieController.listarSerieFiccaoCientifica(req, res);
})

router.get("/listarSerieSuspense", function(req, res){
    serieController.listarSerieSuspense(req, res);
})

module.exports = router;