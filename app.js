import express from "express";
import userRouter from "./routes/user.js";
import errorMiddleware from "./middlewares/Error.js";
import { connectDB } from "./config/database.js";

const app = express();

app.use("/user", userRouter);

connectDB();

app.use(errorMiddleware);

app.listen(4000, ()=>{
    console.log("server is working");
})