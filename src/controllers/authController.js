const User = require("../models/User");

exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

    await User.create({
        nome,
        email,
        senha
    });

    res.redirect("/login");
};