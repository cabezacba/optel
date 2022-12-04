const { response } = require('express');
const { request } = require('express');

const Menu = require('../db/models/Menu')

const menuPost = async (req = request, res = response) => {
    
    const {name, parentID}  = req.query;
    const dates = {
        name,
        parentID
    };
    try {    
                
        const menu = new Menu(dates);
        await menu.save();
        res.json ({
            msg: `El Menu se guardo correctamente`
        });
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }
};

const menuDelete = async (req = request, res = response) => {
    const id = req.params.id;

    try {    
        const menu = await Menu.findByPk(id);

        if(!menu){
            return res.status(404).json({
                msg: `No existe un menu con id: ${id}`
            });
        };
                
        await menu.update({state: 0});
        res.json ({
            msg: `Menu: ${menu}`
        });
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })        
    }
};

const menuPut = async (req, res = response) => {

    const id = req.params.id;
    const {name, parentID} = req.query;
    const dates = {
        name,
        parentID,  
    };

    try {    
        const menu = await Menu.findByPk(id);
     
        //valido exitencia usario
        if(!menu){
            return res.status(404).json({
                msg: `No existe un menu con id: ${id}`
            });
        };       
                
        await menu.update(dates);
        res.json (menu);
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })
    }   
};

const menuGet = async (req, res = response) => {
    const id = req.params.id;
    const menu = await Menu.findByPk(id);
    
    if(menu){
           res.json(menu);
    }else{
        res.status(404).json({
            msg: `No existe menu con id ${id}`
        });
    }
    
   
};

const menuAllGet = async (req, res = response) => {
    const menus = await Menu.findAll({
        attributes: ['name', 'parentID'],
        where: { state: 1 }
      });
    
    if(menus){
        res.json(menus);
    }else{
     res.status(404).json({
         msg: `No existe menus en el sistema`
     });
 }

    
};



module.exports = { menuGet, menuPost, menuPut, menuDelete, menuAllGet}