const { response } = require('express');

const menuPost = (req, res = response) => {
    
    
    res.json({
        msg: 'post menu menuPost'        
    })
};

const menuDelete = (req, res = response) => {
    res.json({
        msg: 'delete menu menuDelete'
    })
};

const menuPut = (req, res = response) => {
    res.json({
        msg: 'put menu  menuPut'
    })
};

const menuGet = (req, res = response) => {
    res.json({
        msg: 'get menu menuGet'
    })
};

const menuAllGet = (req, res = response) => {
    res.json({
        msg: 'get menu menuAllGet'
    })
};



module.exports = { menuGet, menuPost, menuPut, menuDelete, menuAllGet}