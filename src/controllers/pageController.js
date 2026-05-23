exports.home = (req, res) => {
    res.render("home", {
        user: req.session.user
    });
};

exports.login = (req, res) => {
  res.render("login");
};

exports.cadastro = (req, res) => {
  res.render("cadastro");
};