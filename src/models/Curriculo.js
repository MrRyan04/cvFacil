const {
    DataTypes
} = require("sequelize");

const sequelize =
    require("../config/database");

const Curriculo =
    sequelize.define(
        "Curriculo",
        {

            titulo: {
                type:
                    DataTypes.STRING,

                allowNull: false
            },

            nome: {
                type:
                    DataTypes.STRING,
                allowNull: false
            },

            email: {
                type:
                    DataTypes.STRING,
                allowNull: false
            },

            telefone: {
                type:
                    DataTypes.STRING
            },

            cidade: {
                type:
                    DataTypes.STRING
            },

            objetivo: {
                type:
                    DataTypes.TEXT
            },

            sobre: {
                type:
                    DataTypes.TEXT
            },

            formacao: {
                type:
                    DataTypes.TEXT
            },

            experiencia: {
                type:
                    DataTypes.TEXT
            }

        }
    );

module.exports =
    Curriculo;