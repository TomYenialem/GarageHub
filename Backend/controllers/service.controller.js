// import serive.serive from serive
const service=require('../services/service.service')

const addService =async(req,res)=>{
try {
    const services=req.body
    const result = await service.addNewSerive(services);
    if(!result){
        res.status(400).json({
            error: 'Failed to add service'
        
        })
    }
    res.status(200).json({
        message: 'Service added successfully',
        data: result
    })
    
} catch (error) {
    console.log(error)
    res.status(500).json({
        error: 'Internal Server Error'
    })
}
}
module.exports={
    addService
}