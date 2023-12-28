import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
// import { testController } from "../controllers/testController.js";
import testRoutes from "./routes/testRoutes.js"
//dot env config
dotenv.config();
//rest objest
const app =express();

//middleware
app.use(morgan("dev"))// which api is call 
app.use(express.json());
app.use(cors())//it is middleware

//routes
app.use("/api/vi",testRoutes)
app.get("/",(req,res)=>{
    return res.status(200).send("<h1>welcome to node server</h1>");

})

//port
const PORT =process.env.PORT || 8000;


//listen
app.listen(PORT,()=>{
    console.log(`Server Running On PORT ${process.env.PORT}`.bgCyan)
});