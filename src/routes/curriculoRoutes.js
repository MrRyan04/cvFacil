const authMiddleware = require("../middlewares/authMiddleware");

const express = require("express");

const router = express.Router();

const curriculoController =
    require("../controllers/curriculoController");


router.get(
    "/curriculo",

    authMiddleware
        .isAuthenticated,

    curriculoController
        .formulario
);

router.post(
    "/curriculo",
    curriculoController.criar
);

router.get(
    "/meusCurriculos",
    authMiddleware.isAuthenticated,
    curriculoController.listar
);

router.get(
    "/curriculos/:id",
    curriculoController.visualizar
);

module.exports = router;