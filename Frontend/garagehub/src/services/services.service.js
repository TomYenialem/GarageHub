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
 const services={
    addNewServices

 }
 export default services;