const {Sequelize} = require("sequelize")

class Database {

    constructor(){

        this.init();

    }

    init(){

        this.db = new Sequelize({
            database: "camara_db",
            host: "mysql_db",
            username: "root",
            dialect: "mysql",
            password: "1qaz!QAZ"
        })

    }

}

module.exports = new Database();