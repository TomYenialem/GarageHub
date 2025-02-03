const api_url = import.meta.env.VITE_API_URL;
const addCustomers=async(formData)=>{
const options={
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify(formData)
}
const response = await fetch(`${api_url}/api/customers`, options);
return response
}
const getCustomer=async()=>{
    const options={
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
        
    }
    const response = await fetch(`${api_url}/api/customers`, options);
    return response
}
const customers={
    addCustomers,
    getCustomer
 
}

export default customers
