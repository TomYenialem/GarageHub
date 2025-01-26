const express= require('express')
const app =express()
require('dotenv').config()
const routers=require('./routes')

app.use(express.json())
app.use(routers)





app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})