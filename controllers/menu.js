const { response } = require('express');
const { request } = require('express');
const { json } = require('sequelize');

const { list_to_tree } = require('../lib/lib')

const Menu = require('../db/models/Menu')

const menuPost = async (req = request, res = response) => {
    
    const {name, parentID}  = req.query;
    const dates = {
        name,
        parentID,
        state:1
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
            msg: `Menu: ${menu.name} fue borrado`
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
        parentID
         
    };

    try {    
        const menu = await Menu.findByPk(id);
     
        //valido exitencia menu
        if(!menu){
            return res.status(404).json({
                msg: `No existe un menu con id: ${id}`
            });
        };       
                
        await menu.update(dates);
        res.json ({
            msd: `El menu id ${menu.id} fue modicado`});
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })
    }   
};

const menuGet = async (req, res = response) => {
    const id = req.params.id;
    
    try {
        const menu = await Menu.findByPk(id);
    
        if(menu){
               res.json(menu);
        }else{
            res.status(404).json({
                msg: `No existe menu con id ${id}`
            });
        }
        
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })
    }   
};

const menuAllGet = async (req, res = response) => {
    
    try {
        const menus = await Menu.findAll({
            attributes: ['id','name', 'parentID'],
            where: { state: 1 },
            raw : true 
          });
        
        //valido que existan munus en el sistema
        if(menus){          

            //armo el menu anidado con la funcion list_to_tree
            res.json(list_to_tree(menus));
                       
        }else{
         res.status(404).json({
             msg: `No existe menus en el sistema`
         });
        } 
    } catch (error) {
        console.log(error),
        res.status(500).json({
            msg: "Error en el servidor comunicase con el adminstrador",
        })
    }  
};



//function list_to_tree(list) {
//    console.log(list)
//    //declaro las variables locales
//    var map = {}, node, roots = [], i;
//    
//    for (i = 0; i < list.length; i += 1) {
//      map[list[i].id] = i; // Inicializo el map      
//      list[i].children = []; // Inicializo el children      
//    }
//    
//    //recorro todos los  menus
//  
//    for (i = 0; i < list.length; i += 1) {
//      //tomo en menu que esta en lugar i
//      node = list[i];
//      
//      // si el menu tiene padre
//      if (node.parentID !== null) {
//        // pongo el hijo dle menu en el padre     
//        list[map[node.parentID.toString()]].children.push(node);
//
//      } else {
//        roots.push(node);
//      }
//    } 
//    return roots;
// }


module.exports = { menuGet, menuPost, menuPut, menuDelete, menuAllGet}