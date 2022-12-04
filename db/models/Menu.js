const {Model, DataTypes} = require('sequelize')

const db = require ('../db');

const Menu = db.define('Menu',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    parentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
});


module.exports = Menu;