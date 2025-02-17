const jwt =require("jsonwebtoken")
const emailService=require('../services/employee.service')
const authorization=async(req,res,next)=>{
try {

    const token=req.headers['x-access-token']
    if(!token){
        return res.status(403).json({
            status:"fail",
            message:"No token provided"
        })
    }
    console.log(token)
 jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
    if(err){
        return res.status(403).json({
            status:"fail",
            message:"Unauthorized"
        })

    }
    // req.user=decoded.user
  req.employee_email = decoded.employee_email;
  
    next()


   })
  

    
} catch (error) {
    console.log(error)
    res.status(500).json({
        status:"fail",
        message:"Internal server error"
    })
}
}
const isAdmin = async (req, res, next) => {

  const employee_email = req.employee_email;
  const employee = await emailService.getEmployeeByEmail(employee_email);
  if (employee[0].company_role_id === 1||2||3) {
    next();
  } else {
    return res.status(403).send({
      status: "fail",
      error: "Not an Admin!",
    });
  }
};

const middlware={
    authorization,
    isAdmin
}

module.exports=middlware