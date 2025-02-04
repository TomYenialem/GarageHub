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
module.exports={
    addNewSerive
}