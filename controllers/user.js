const { response } = require('express');
const Usuario = require('../db/models/User')


const userPost = async (req,res) => {
    const {username, lastname, email, password, name}  = req.query;
    const dates = {
        username,
        name,
        lastname,
        email,
        password,
        state:1
    };
    try {    
        const existeEmail = await Usuario.findOne({
            where:{
                email: email
            }
        })

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con email: ${email}`
            })
        }
        
        const user = new Usuario(dates);
        await user.save();
        res.json (user);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }
  
};

const userDelete = async (req, res = response) => {
    const id = req.params.id;

    try {    
        const user = await Usuario.findByPk(id);

        if(!user){
            return res.status(404).json({
                msg: `No existe un usuario con id: ${id}`
            });
        };
                
        await user.update({state: 0});
        res.json ({
            msg: `Usuario con id ${id}`
        });
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }
    
};

const userPut = async (req, res = response) => {
    
    const id = req.params.id;
    const {username, lastname, email, password, name}  = req.query;
    const dates = {
        name,
        lastname,
        email,
        password,  
    };
    try {    
        const user = await Usuario.findByPk(id);

        if(!user){
            return res.status(404).json({
                msg: `No existe un usuario con id: ${id}`
            });
        };

        const existeEmail = await Usuario.findOne({
            where:{
                email: email
            }
        })
        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con email: ${email}`
            })
        };
                
        await user.update(dates);
        res.json (user);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }  
};


const userGet = async (req, res = response) => {
    const id = req.params.id;
    const user = await Usuario.findByPk(id);
    
    if(user){
           res.json(user);
    }else{
        res.status(404).json({
            msg: `No existe usuario con id ${id}`
        });
    }
    
 
};

const userMenuGet = (req, res = response) => {
    res.json({
        msg: 'get user userMenuGet'
    })
};

const userAllGet = async(req, res = response) => {
    
    const users = await Usuario.findAll({
        attributes: ['username', 'name', 'lastname', 'email'],
        where: { state: 1 }
      });
    
    if(users){
           res.json(users);
    }else{
        res.status(404).json({
            msg: `No existe usuarios en el sistema`
        });
    }
        
    res.json({
        msg: 'get user  userAllGet'
    })
};

module.exports = {userGet, userPost, userPut, userDelete, userMenuGet, userAllGet}