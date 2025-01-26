const express=require('express')
const router=express.Router()
const installController=require('../controller/install')

router.get('/install',installController.install)


module.exports=router