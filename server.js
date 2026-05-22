const app = require("./src/app");

app.listen(3000, () => {
  console.log("Servidor rodando");
});const app = require("./src/app");
const sequelize = require("./src/config/database");

require("./src/models/User");

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log("Banco conectado");

        app.listen(PORT, () => {
            console.log("Servidor rodando");
        });
    })
    .catch(err => console.log(err));