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
const singleCustomer=async(id)=>{
    const options={
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
        
    }
    const response = await fetch(`${api_url}/api/customers/${id}`, options);
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update customer");
    }
    return response

}
const editCustomer=async(customer_id,Data)=>{
  
    try {
        const options={
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(Data)
        }
        const response = await fetch(
          `${api_url}/api/customers/${customer_id}`,
          options
        );
        return response
        
    } catch (error) {
        console.log(error)
    }
}
const customers={
    addCustomers,
    getCustomer,
    singleCustomer,
    editCustomer
 
}

export default customers
