
// Import from the env 
const api_url = import.meta.env.VITE_API_URL;
console.log("API URL:", api_url);


// A function to send post request to create a new employee 
const createEmployee = async (formData, loggedInEmployeeToken) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': loggedInEmployeeToken
    },
    body: JSON.stringify(formData)
  };
  console.log(requestOptions);
  const response = await fetch(`${api_url}/api/employee`, requestOptions);
  return response;
}
const getAllemployess=async(token)=>{
   const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token
    }
   }
   const response= await fetch(`${api_url}/api/employees`,requestOptions);
    return response;
}


const getSingleEmployee=async(employee_id)=>{
 const options={
  method:'GET',
  headers:{
   'Content-Type':'application/json'
  }
  
 }
 const response= await fetch(`${api_url}/api/employees/${employee_id}`,options);
 return response.json()
}
const editEmployee=async(employee_id,data)=>{
 try {
  
  const options={
    method: 'PUT',
    headers:{
   'Content-Type':'application/json'
    },
    body: JSON.stringify(data)

  }
  const response = await fetch(`${api_url}/api/employees/${employee_id}`,options)
  return response.json()
 } catch (error) {
  console.log(error)
 }
}
const deleteEmploye=async(id)=>{
  try {
    const options={
      method: 'DELETE',
      headers:{
       'Content-Type':'application/json'
      }
    }
    const response = await fetch(`${api_url}/api/employees/${id}`,options)
   return response.json()
    
    
  } catch (error) {
    console.log(error)
  }
}
// Export all the functions 
const employeeService = {
  createEmployee,
  getAllemployess,
 getSingleEmployee,
 editEmployee,
 deleteEmploye

}
export default employeeService; 
