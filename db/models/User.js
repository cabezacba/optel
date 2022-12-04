const {Model, DataTypes} = require('sequelize')

const db = require ('../db');
const Menu = require ('../models/Menu')

const User = db.define('User',{
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
      },  
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
    },    
    state: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
});

User.belongsToMany(Menu, { through: 'MenusToUsers'});

module.exports = User;