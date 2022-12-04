const express = require('express')


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/users';
        this.menuPath = '/menus';
        
        // middlewares
        this.middlewares();
        
        // Routes
        
        this.routes();
    }

    routes(){
       this.app.use(this.userPath, require('../routes/user.js'));
       this.app.use(this.menuPath, require('../routes/menu.js'));
    
    }

    middlewares(){
        // Directorio Publico
        this.app.use(express.static('public'))

        //Read and pharser body
        this.app.use( express.json() );

    }

    listen(){
        this.app.listen( this.port, ()=> {
            console.log("Escuchando en: ", this.port );   
        });
    }
}

module.exports = Server;