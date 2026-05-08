var express = require("express");
var router = express.Router();

var serieController = require("../controllers/serieController");

router.post("/cadastrarSerie", function (req, res) {
    serieController.cadastrarSerie(req, res);
})

module.exports = router;