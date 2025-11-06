const {Sequelize} = require("sequelize")

class Database {

    constructor(){

        this.init();

    }

    init(){

        this.db = new Sequelize({
            database: "camara_db",
            host: "localhost",
            username: "root",
            dialect: "mysql",
            password: ""
        })

    }

}

module.exports = new Database();