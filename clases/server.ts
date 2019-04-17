import express from 'express';
import { SERVER_PORT } from '../global/envioroment';
import socket from 'socket.io';
import http from 'http';

import * as socketp   from '../sockets/socket';

export default class Server{

    private static _instance:Server;
    public app: express.Application;
    public port : number;   
    public io : socket.Server;
    private httpServer :http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;
        this.httpServer  = new http.Server(this.app);
        this.io =socket(this.httpServer);

        this.escucharSocket();
    }
    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    private escucharSocket(){
        console.log('escuchando socket');
        this.io.on('connection' , cliente => {
            console.log('cliente conectado')

            socketp.mensaje(cliente , this.io);
            socketp.desconectar(cliente);
        })  
    }

    start(callback:Function){
        this.httpServer.listen(this.port);
    }
    
}