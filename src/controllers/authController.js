const User = require("../models/User");

exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

    const user = await User.create({
        nome,
        email,
        senha
    });

    console.log(user);

    res.redirect("/login");
};

exports.login = async (req, res) => {

    const { email, senha } = req.body;

    const user = await User.findOne({
        where: { email }
    });

    if (!user) {
        return res.send(
            "Usuário não encontrado"
        );
    }

    if (user.senha !== senha) {
        return res.send(
            "Senha incorreta"
        );
    }

    return res.redirect("/");
};