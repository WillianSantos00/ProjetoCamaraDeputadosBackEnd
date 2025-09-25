const database = require("../database");


class Usuario{

    constructor(){

        this.model = database.db.define("usuario", {
            cod: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            email: {
                type: database.db.Sequelize.STRING,
                unique: true
            },
            telefone: {
                type: database.db.Sequelize.INTEGER
            }
        })

    }

}

module.exports = new Usuario().model;