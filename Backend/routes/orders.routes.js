const express = require('express');
const routes=express.Router()

const ordersController=require('../controllers/orders.controller')
routes.post('/api/orders',ordersController.sendOrdersRequest)


module.exports=routes