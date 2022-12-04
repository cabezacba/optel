const { response } = require('express');


const userPost = (req, res = response) => {
    
    const body = req.body;
    console.log(body);
    res.json({
        msg: 'post user userPost',
        body
    })
};

const userPut = (req, res = response) => {
    
    const id = req.params.id;

    res.json({
        msg: 'Put user userPut',
        id
    })
};

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete user userDelete'
    })
};

const userGet = (req, res = response) => {
    res.json({
        msg: 'get user userGet'
    })
};

const userMenuGet = (req, res = response) => {
    res.json({
        msg: 'get user userMenuGet'
    })
};

const userAllGet = (req, res = response) => {
    res.json({
        msg: 'get user  userAllGet'
    })
};

module.exports = {userGet, userPost, userPut, userDelete, userMenuGet, userAllGet}