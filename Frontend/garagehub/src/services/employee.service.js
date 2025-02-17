
// Import from the env 
const api_url = import.meta.env.VITE_API_URL;
console.log("API URL:", api_url);


// A function to send post request to create a new employee 
const createEmployee = async (formData) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(formData),
    };

    console.log("🔍 Sending Request to:", `${api_url}/api/employee`);
    console.log("📝 Request Options:", requestOptions);

    const response = await fetch(`${api_url}/api/employee`, requestOptions);

    console.log("📥 Response Status:", response.status);
    if (!response.ok) {
      const errorData = await response.text();
      console.log("⚠️ Backend Error:", errorData);
      throw new Error(errorData);
    }

    return response.json();
  } catch (error) {
    console.error("❌ Fetch Error:", error);
    throw error;
  }
};

const getAllemployess = async () => {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(`${api_url}/api/employees`, requestOptions);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // ✅ Await JSON parsing
    return data; // ✅ Return parsed data
  } catch (error) {
    console.error("Error fetching employees:", error);
    return []; // ✅ Return empty array to prevent crashes
  }
};


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
