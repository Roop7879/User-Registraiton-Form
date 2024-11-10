import dotenv from 'dotenv'
import db from '../db/index.js'
import express from 'express'
import register from '../routes/register.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use(express.json())

dotenv.config({path:'./env'})
console.log('database aanw wwala hai')
db()

app.listen(process.env.PORT,()=>{
    console.log(`App is listening on port: ${process.env.PORT}`)
})

app.use('/register',register)