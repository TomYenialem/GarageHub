const express=require('express')
const routers=express.Router()
const intialInstall=require('./installRoute')

// Initial setup route
 
routers.use(intialInstall)
module.exports=routers