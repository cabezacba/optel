const express = require('express')
const db = require('../db/db')
const User = require('../db/models/User')
const Menu = require('../db/models/Menu')
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/users';
        this.menuPath = '/menus';
        
        // connection DB
        this.dbConnection();
        
        // middlewares
        this.middlewares();
        
        // Routes
        this.routes();
    }

    routes(){
     
       this.app.use(this.userPath, require('../routes/user.js'));
       this.app.use(this.menuPath, require('../routes/menu.js'));
    }

    dbConnection(){
        
            db.sync({force: false}).then(() => {
                console.log("se conecto a la bd");
            }).catch((error)=>{
                console.log(error);
            });
    }

    middlewares(){
    
        this.app.use( express.json() );
    }

    listen(){
        
        this.app.listen( this.port, ()=> {
            console.log("Escuchando en: ", this.port );   
        });
    }
}

module.exports = Server;