// Import React and the Hooks we need here
import React, { useState, useEffect, useContext } from "react";
// Import the Util function we created to handle the reading from the local storage
import getAuth from "../util/auth";
// Create a context object
const AuthContext = React.createContext();
// Create a custom hook to use the context
import serv from '../services/services.service'
export const useAuth = () => {
  return useContext(AuthContext);
};
// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState(null);
  const [customers, setcustomers] = useState([]);
   const [serviceDatas, setServiceDatas] = useState([]);
   

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
    fetchDatas
  };

  useEffect(() => {
    // Retrieve the logged in user from local storage
    const loggedInEmployee = getAuth();
    // console.log(loggedInEmployee);
    loggedInEmployee.then((response) => {
      console.log(response);
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
