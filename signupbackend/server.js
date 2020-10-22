const express = require('express')
const app = express()//set post 4700
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

//ใส่ไว้กัน Warning 
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,options, () => console.log("Database connected"))


app.use(express.json())//set ให้ postman "post" ข้อมูลแบบ  Json ได้ 
app.use(cors())
app.use('/app', routesUrls)
app.listen(4700, () => console.log("server is up and running"))

