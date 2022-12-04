const { response } = require('express');


const userPost = (req, res = response) => {
    
    const query = req.query;
    console.log(query);
    res.json({
        msg: 'post user userPost',
        query
    })
};

const userDelete = (req, res = response) => {
    res.json({
        msg: 'delete user userDelete'
    })
};

const userPut = (req, res = response) => {
    
    const id = req.params.id;

    res.json({
        msg: 'Put user userPut',
        id
    })
};


const userGet = (req, res = response) => {
    const id = req.params.id;
    
    res.json({
        msg: 'get user userGet',
        id
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