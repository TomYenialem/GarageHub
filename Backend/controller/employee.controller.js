const employeeService=require('../services/employee.service');

const createEmployee=async(req,res)=>{
    const employeeExit = await employeeService.checkIfEmployeeExists(req.body.email);
    if(employeeExit){
        return res.status(400).json({message:'Employee already exists'});
    }
   else{
    try {
           const employeeData = req.body;
           
     const employee = await employeeService.createNewEmploy(employeeData);
     if(!employee){
            return res.status(400).json({message:'Employee not created'});
     }
        return res.status(200).json({message:'Employee created successfully'});
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({message:'Server error'});
    }
   }

}
module.exports={
    createEmployee
}

