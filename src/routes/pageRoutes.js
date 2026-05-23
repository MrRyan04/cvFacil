const express = require("express");

const router = express.Router();

const pageController = require("../controllers/pageController");

router.get("/", pageController.home);
router.get("/login", pageController.login);
router.get("/cadastro", pageController.cadastro);
router.get("/meusCurriculos", pageController.meusCurriculos);


module.exports = router;