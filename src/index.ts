import express, {json} from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(json());



const PORT = process.env.PORT || 6002
server.listen(PORT ,()=>{
    console.log(`subiu a porta ${PORT} 
    `)
})  