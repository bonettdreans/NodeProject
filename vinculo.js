const {Sequelize} = require ('sequelize')

const sequelize =  new Sequelize ({
    dialect: 'sqlite',
    storage: 'tarefas.db'
})

sequelize.sync()

module.exports = sequelize