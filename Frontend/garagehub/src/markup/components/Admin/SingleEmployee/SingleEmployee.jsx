import React, { useEffect, useState } from 'react'
import singleEmployeeData from '../../../../services/employee.service'

function SingleEmployee({employee_id,employeeData}) {
 
    const [singleEmployee,setSingleEmployee] =useState([])
    const fetchSingleEmployee=()=>{
      try {
          const employee = singleEmployeeData.getSingleEmployee(employee_id);
          employee.then((data) => {
            setSingleEmployee(data.data);
      
            employeeData(data.data[0])
          });
      } catch (error) { 
        console.error("Error fetching customer details:", error);
      }
    }
    useEffect(()=>{
fetchSingleEmployee()
    },[employee_id])
  
  if (!singleEmployee || singleEmployee.length === 0) {
    return <p>Loading customer details...</p>;
  }

  return null
}

export default SingleEmployee