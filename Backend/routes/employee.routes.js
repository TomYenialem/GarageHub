const express=require('express')
const router=express.Router()
const eemplyeeController=require('../controller/employee.controller')
router.post('/add_employee',eemplyeeController.createEmployee)
module.exports=router