import {Server} from "socket.io"

let messages =[{
    message:"Hello World",
    date:1676134114029
}]

export const chatSocket=(server)=>{
    const io = new Server(server)  //Este server que esta en los parentesis no es el que importamos de socket, es una parametro para recibir el server de express, donde se esta ejecutando

    io.on("connection",(socket)=>{
        console.log("User connected",socket.id);
        
        //Mensaje al cliente o front

        const sendMessages=()=>{
            io.emit("server:getMessages",messages)
        }

    sendMessages()

   //Vamos a capturar los mensajes del cliente
   
   socket.on("client:addMessage",(message) =>{

    //Hay varias formas de guardar esos mensajes nuevos del cliente en nuestro array, 
    
    // messages=[...messages,message]

    messages.push(message)
    sendMessages()

   })

   //Esto es opcional ,lo que vamos a hacer es que nos muestre cuando un usuario se desconecta

   socket.on("disconnect",()=>{
    console.log("User dissconected",socket.id);
   })



    })
}