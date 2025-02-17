const api_url = import.meta.env.VITE_API_URL;


const addVehicles=async(customer_id,vehicleData)=>{
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(vehicleData)
    }

    const response = await fetch(`${api_url}/api/addvehicle/${customer_id}`,options);
    return response

}
const CustomerVehicle=async(customer_id)=>{
    try {
        const options={
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        
        }
        const response = await fetch(`${api_url}/api/addvehicle/${customer_id}`,options);
        return response.json()
    
    } catch (error) {
        console.log(error)
    }
}
const singleVehicle=async(vehicle_id)=>{
    try {
        const options={
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }
        const response = await fetch(`${api_url}/api/getvehicle/${vehicle_id}`, options);
        return response.json()
        
    } catch (error) {
        
    }
}

const editVehicle=async(vehicle_id,data)=>{
    try {
        const options={
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data),
        }
        const response = await fetch(
          `${api_url}/api/editvehicle/ ${vehicle_id}`,
          options
        );
        return response
    } catch (error) {
        console.log(error)
    }
}
const vehicles={
    addVehicles,
    CustomerVehicle,
    singleVehicle,
    editVehicle
 
}

export default vehicles;