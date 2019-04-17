import {Socket} from 'socket.io'
import socket from 'socket.io';

export const desconectar = (cliente:Socket) =>{

    cliente.on('disconnect' , ()=>{
        console.log('Cliente desconectado')
    })

}

export const mensaje=(cliente:Socket , io :socket.Server) =>{

    cliente.on('mensaje' , (payload:{de:string , cuerpo:string })=>{
        console.log("Mensaje recibido " ,payload);;

        io.emit('mensaje-nuevo',payload);
    })
}

