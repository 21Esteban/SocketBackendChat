import express from "express";
import { chatSocket } from "./socket/chat.socket.js";

const app = express()


app.set("Port",4000)

const server = app.listen(app.get("Port"),()=>{
    console.log("Servidor escuchando por el puesto", app.get("Port"));
})

chatSocket(server)
