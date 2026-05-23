const express = require("express");

const router = express.Router();

const curriculoController =
    require("../controllers/curriculoController");


router.get(
    "/curriculo",
    curriculoController.formulario
);

module.exports = router;