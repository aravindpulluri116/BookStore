import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose"
import bodyParser from "body-parser"
import booksRoutes from "./routes/booksRoutes.js"
import cors from "cors"
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(cors({
    origin:"http://localhost:5173",
    methods:['POST','GET','PUT','DELETE'],
    allowedHeaders:["Content-Type"]
}))
app.get('/',(request,response)=>{
    return response.status(200).send("BookStore")
})
app.use("/books",booksRoutes)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("DataBase Connected")
        app.listen(PORT, () => {
            console.log(`Running on Port: ${PORT}`);
          });
    })
    .catch((err)=>{
        console.log(err);
    })
