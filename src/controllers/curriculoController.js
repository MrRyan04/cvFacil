const Curriculo =
    require("../models/Curriculo");
    

    exports.listar = async (req, res) => {

    const curriculos =
        await Curriculo.findAll({
            where: {
                userId:
                    req.session.user.id
            }
        });

        res.render("meusCurriculos", {
            user: req.session.user,
            curriculos
        });
};

exports.formulario =
(req, res) => {

    res.render(
        "formulario",
        {
            user:
                req.session.user
        }
    );
};

exports.criar =
async (req, res) => {

    const {

        titulo,
        nome,
        email,
        telefone,
        cidade,
        objetivo,
        sobre,
        formacao,
        experiencia

    } = req.body;

    const userId = req.session.user.id;

    const curriculo =
        await Curriculo.create({

            userId,
            titulo,
            nome,
            email,
            telefone,
            cidade,
            objetivo,
            sobre,
            formacao,
            experiencia

        });

   // console.log(curriculo);

    return res.redirect("/");
};