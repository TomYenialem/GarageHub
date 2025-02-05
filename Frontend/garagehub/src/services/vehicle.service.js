const api_url = import.meta.env.VITE_API_URL;


const addVehicles=async(customer_id,vehicleData)=>{
    const options={
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(vehicleData)
    }

    const response = await fetch(`${api_url}/api/addvehicle/${customer_id}`);
    return response

}
const vehicles={
    addVehicles
}

export default vehicles;