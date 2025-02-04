const conn=require('../config/db.config')

const addNewSerive=async(service)=>{
    try {
        const addServer =
          "INSERT INTO common_services(service_name,service_description) VALUES (?,?)";
          const result = await conn.query(addServer, [service.service_name,service.service_description]);
          return result;    
        
    } catch (error) {
        console.log(error)
    }
}
const getAllServcies=async()=>{
    try {
        const getAllServices = "SELECT * FROM common_services";
        const result = await conn.query(getAllServices);
        return result;
        
    } catch (error) {
        console.log(error)
    }
}
const deleteService=async(service)=>{
    try {
        const deleteService = "DELETE FROM common_services WHERE service_id=?";
        const result = await conn.query(deleteService, [service]);
        return result;
        
    } catch (error) {
        console.log(error)
    }

}

const editServices=async(id,service)=>{
    try {
        const editServices = "UPDATE common_services SET service_name=?, service_description=? WHERE service_id=?";
        const result = await conn.query(editServices, [service.service_name,service.service_description,id]);
        return result;
        
    } catch (error) {
        console.log(error)
    }

}



module.exports={
    addNewSerive,
    getAllServcies,
    deleteService,
    editServices,
    
 
}