import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routers/userRouter.js'
import authenticate from './middlewares/authenticate.js'
import productRouter from './routers/productRouter.js'
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const mongoDBURI = process.env.MONGO_URI

mongoose.connect(mongoDBURI).then(
    ()=>{
        console.log("Connected with MongoDB successfully")
    }
)

const app = express()

app.use(cors())

app.use( express.json() )

app.use(authenticate)


app.use("/api/users" , userRouter)
app.use("/api/products" , productRouter)

app.listen(
    3000 ,
    ()=>{
        console.log('Server started successfully on port 3000')
    }
)
