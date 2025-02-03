
const vehicleService=require('../services/vehicle.service') 

const addVehicle=async(req,res)=>{
    try {
        const vehicle=req.body
        const newVehicle = await vehicleService.addVehicleForCustomer(vehicle);
        if(!newVehicle){
            res.status(400).json({message: 'Failed to add vehicle'})
        }
        res.status(201).json({
            message: 'Vehicle added successfully',
            vehicle: newVehicle
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Internal Server Error'})

    }


}
module.exports={
    addVehicle
}