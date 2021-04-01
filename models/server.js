const express = require('express');
const cors = require('cors');
const Db = require('../db/DB');


class Server {

    constructor(){
        this.port = process.env.PORT;
        this.msg = 'ok';
        this.app = express()
        this.middlewares();
        this.routes();
        this.db = new Db();      
        this.db.cargarData();  
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('cliente/build')); // ruta /
    }

    routes(){
        this.app.get('/login', (req, res) => { 
            const {query} = req; 
            const r = this.db.infoUser(query.ID); //consulta dentro los usuarios si Id de entrada coincide con uno de la DB
            const db = this.db.infousers;                
            if (r !== undefined) {
                (r.last_name !== query.lastname)
                ? this.msg = 'Datos incorrectos por favor rectifica'
                : this.msg = 'ok';
                
            } else {this.msg = 'Datos incorrectos por favor rectifica'}   
            const msg = this.msg;       
            res.send({msg, db})
          });

        this.app.get('/userInfo', (req, res) => {            
            const {query} = req;                                     
            const userInfo = this.db.infoUser(query.id);
            (userInfo)
                ? res.send(userInfo)
                : res.send('Sin información para el Id seleccionado');
        });

        this.app.get('*', (req, res) => {
            console.log('in error')
            console.log(req)
            res.sendFile("cliente/build/index.html");
        });
    }

    startServer(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`)
        });
    }
}

module.exports = Server;