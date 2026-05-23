const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

    const senhaHash =
        await bcrypt.hash(
            senha,
            10
        );

    const user =
        await User.create({
            nome,
            email,
            senha: senhaHash
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

    const senhaCorreta =
        await bcrypt.compare(
            senha,
            user.senha
        );

    if (!senhaCorreta) {
        return res.send(
            "Senha incorreta"
        );
    }

    return res.send(
        `Bem-vindo ${user.nome}`
    );
};