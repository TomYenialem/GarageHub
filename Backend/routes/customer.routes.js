const express=require('express');
const routes=express.Router();
const customer=require('../controllers/customer.controller')

routes.post('/api/customers',customer.addCustomer)

routes.get('/api/customers',customer.getAllCustomers)

routes.get('/api/customers/:id',customer.singleCustomer)

module.exports=routes;