const {Model, DataTypes} = require('sequelize')


const db = require ('../db');
const Menu = require ('../models/Menu');
const User = require ('../models/User')

const MenusToUsers = db.define('grant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },    
  }, { timestamps: false });




module.exports = MenusToUsers;