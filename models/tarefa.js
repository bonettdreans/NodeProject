const { DataTypes } = require ('sequelize')
const sequalize = require ('../vinculo')

const Tarefas = sequalize.define('Tarefas', {
    nome: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
})

module.exports = Tarefas