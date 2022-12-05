const { response } = require('express');

const Menu = require('../db/models/Menu');
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
        
        //valido existencia de email
        const existeEmail = await Usuario.findOne({
            where:{
                email: email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Ya existe un usuario con email: ${email}`
            })
        };
        
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
            msg: `Usuario: ${user.username} fue borrado del sistema`
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
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,  
    };
    try {    
        const user = await Usuario.findByPk(id);



        //valido exitencia usario
        if(!user){
            return res.status(404).json({
                msg: `No existe un usuario con id: ${id}`
            });
        };
        
        //valido existencia username
        const existeUser = await Usuario.findOne({
            where:{
                username: username
            }
        });
        
        if(existeUser){
            return res.status(400).json({
                msg: `Ya existe un usuario con username: ${username}, no puede actulizar el usarname`
            })
        };

        //valido exitencia email
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
        res.json ({
            msg: `El usuario ${user.username} fue modificado`});
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }  
};


const userGet = async (req, res = response) => {
    const id = req.params.id;
    
    try {
        const user = await Usuario.findByPk(id,{
            attributes: ['username', 'name', 'lastname', 'email'],
        });
    
        if(user){
           res.json(user);
        }else{
            res.status(404).json({
            msg: `No existe usuario con id ${id}`
        });
    }
    } catch (error) {        
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        }) 
    }
};

const userMenuGet = async (req, res = response) => {
    
    const id = req.params.id;
    
    try {
        const user = await Usuario.findByPk(id,{
            attributes: ['username', 'name', 'lastname', 'email'],
            include: [
                {
                model: Menu,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
           }]
        });

        if(user){
            res.json(user);
        }else{
            res.status(404).json({
                msg: `No existe usuario con id ${id}`
            });
        }


    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicarse con el adminstrador",
        }) 
    } 
    
};

const userAllGet = async(req, res = response) => {
    
    try {
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
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicarse con el adminstrador",
        });        
    }
    
   
   
  
};

module.exports = {userGet, userPost, userPut, userDelete, userMenuGet, userAllGet}