const express = require('express');
const routes=express.Router()

const ordersController=require('../controllers/orders.controller')
routes.post('/api/orders',ordersController.sendOrdersRequest)
routes.get('/api/getorders',ordersController.getAllOrdersInfo)
routes.put('/api/editorders/:id',ordersController.editOrdersInfo)


module.exports=routes