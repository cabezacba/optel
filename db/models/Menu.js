const {Model, DataTypes} = require('sequelize')

const db = require ('../db');
const User = require ('../models/User')

const Menu = db.define('Menu',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    parentID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
});


module.exports = Menu;