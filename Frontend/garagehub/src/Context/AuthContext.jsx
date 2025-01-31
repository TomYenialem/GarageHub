import React, { createContext, useEffect, useContext, useState } from "react";
import employeeAuthHeader from "../util/auth";

// create context
const contextApi = createContext();
//  create custom hook
export const useAuth = () => {
  return useContext(contextApi);
};
function AuthContext({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [employee, setEmployee] = useState(null);


  useEffect(() => {
    const employeedLogin = employeeAuthHeader();
    employeedLogin.then((response) => {
      if (response.employee_token) {
        setIsLogged(true);
      }
      if (response.employee_role === 3) {
        setIsAdmin(true);
      }
      if (response) {
        setEmployee(response);
      }
    });
  }, [employee]);
  const contextValue = {
    isLogged,
    setIsLogged,
    isAdmin,
    setIsAdmin,
    employee,
  };
  return (
    <contextApi.Provider value={contextValue}>{children}</contextApi.Provider>
  );
}

export default AuthContext;
