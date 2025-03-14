// Import React and the Hooks we need here
import React, { useState, useEffect, useContext } from "react";
// Import the Util function we created to handle the reading from the local storage
import getAuth from "../util/auth";
// Create a context object
const AuthContext = React.createContext();
// Create a custom hook to use the context
import serv from '../services/services.service'
 import customerService from "../services/customers.service"


export const useAuth = () => {
  return useContext(AuthContext);
};
// Create a provider component
export const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [customers, setcustomers] = useState([]);
   const [serviceDatas, setServiceDatas] = useState([]);
     const [apiErrorMessage, setApiErrorMessage] = useState(null);
       const [apiError, setApiError] = useState(false);
   
// for both servies page and final order pages
 const fetchDatas = () => {
   serv.getAllServcies().then((res) =>
     res.json().then((data) => {
       setServiceDatas(data.data);
     })
   );
 };
 useEffect(() => {
   fetchDatas();
 }, []);

//  function for both customer list and new order customer list

    function getAllCustomerList() {
 setLoading(true);
 const allcustomers = customerService.getCustomer();
 allcustomers.then((res) => {
     if (!res.ok) {
       setApiError(true);
       if (res.status === 401) {
         setApiErrorMessage("Please login again");
       } else if (res.status === 403) {
         setApiErrorMessage("You are not authorized to view this page");
       } else {
         setApiErrorMessage("Please try again later");
       }
     }
     return res.json();
   })
   .then((data) => {
     if (data?.data?.length !== 0) {
       setcustomers(data.data);
     }
   })
   .catch((err) => {
     console.log(err);
   })
   .finally(() => {
     setLoading(false);
   });

    }
   
useEffect(()=>{
getAllCustomerList()
},[])



  const value = {
    isLogged,
    isAdmin,
    setIsAdmin,
    setIsLogged,
    employee,
    customers,
    setcustomers,
    serviceDatas,
    setServiceDatas,
    fetchDatas,
    apiError,
    apiErrorMessage,
    loading,
    getAllCustomerList
  };

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      // console.log(response);
      if (response.employee_token) {
        setIsLogged(true);
        // 3 is the employee_role for admin
        if (response.employee_role === 3) {
          setIsAdmin(true);
        }
        setEmployee(response);
      }
    });
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
