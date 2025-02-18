const api_url = import.meta.env.VITE_API_URL;
  const addNewServices=async(serviceData)=>{
    const options={
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(serviceData)
    }
    const response=await fetch(`${api_url}/api/service`,options)
    return response
  }
  const getAllServcies = async()=>{
    const options={
        method:'GET',
        headers:{
          'Content-Type':'application/json'
        }
    }
    const response=await fetch(`${api_url}/api/service`,options)
    return response

  }
  const deleteService=async(service_id)=>{
    const options={
        method:'DELETE',
        headers:{
          'Content-Type':'application/json'
        }
    }
    const response = await fetch(
      `${api_url}/api/service/${service_id}`,
      options
    );
    return response.json()
  }

  const editService=async(id,service)=>{
    const options={
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(service)
    }
    const response = await fetch(`${api_url}/api/service/${id}`, options);
    return response

  }
 const services={
    addNewServices,
    getAllServcies,
    deleteService,
    editService

 }
 export default services;