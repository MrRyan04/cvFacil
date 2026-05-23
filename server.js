const app = require("./src/app");
const sequelize = require("./src/config/database");

require("./src/models/User");
require("./src/models/Curriculo");

const PORT = 3000;

sequelize.sync()
    .then(() => {
        console.log("Banco ok");

        app.listen(PORT, () => {
            console.log("Servidor ok");
        });
    })
    .catch(err => console.log(err));