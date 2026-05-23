const Curriculo =
    require("../models/Curriculo");


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

    const curriculo =
        await Curriculo.create({

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

    res.send(
        "Currículo salvo!"
    );
};