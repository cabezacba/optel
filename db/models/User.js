const {Model, DataTypes} = require('sequelize')

const db = require ('../db');

const User = db.define('User',{
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },  
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    state: {
        type: DataTypes.BOOLEAN,
      }
});


module.exports = User;