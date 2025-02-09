const orderServices=require('../services/orders.service')



const sendOrdersRequest =async(req,res)=>{
    try {
        const order= req.body
        const result = await orderServices.sendOrders(order);
        if(!result){
            return res.status(400).json({error: 'Failed to send orders'})
        }
        res.status(200).json({message: 'Orders sent successfully'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Server Error'})
    }
}


const getAllOrdersInfo=async(req,res)=>{
    try {
        const orders = await orderServices.getAllOrders();
       if(!orders){
        return res.status(400).json({error: 'Failed to get orders'})
       }
       else{
        return res.status(200).json({
            data: orders
        })
       }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'Server Error'})
    }
}
module.exports={
    sendOrdersRequest,
    getAllOrdersInfo,
 
}