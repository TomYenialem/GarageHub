
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

// Export all the functions 
const employeeService = {
  createEmployee,
  getAllemployess
}
export default employeeService; 
