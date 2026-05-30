const bcrypt = require("bcrypt");
const User = require("../models/User");

exports.register = async (req, res) => {

    const { nome, email, senha } = req.body;

        const usuarioExistente =
        await User.findOne({
            where: { email }
        });

    if (usuarioExistente) {

        return res.send(`
            <script>
                alert(
                    "Usuário já cadastrado, faça o login"
                );

                window.location.href =
                    "/login";
            </script>
        `);
    }

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

   // console.log(user);

    res.redirect("/login");
};

exports.login = async (req, res) => {

    const { email, senha } = req.body;

    const user = await User.findOne({
        where: { email }
    });

    if (!user) {
        res.redirect("/login");
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

req.session.user = user;

return res.redirect("/");
};