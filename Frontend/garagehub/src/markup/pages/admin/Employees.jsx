import React from "react";
// Import the auth hook

// Import the Login component
import LoginForm from '../../components/Login/LoginForm'
// Import the AdminForm component
import AdminForm from '../../components/Admin/AdminMenu/AdminMenu'
import EmployeeList from "../../components/Admin/EmployeeList/EmployeeLists";
import { useAuth } from "../../../Context/AuthContext";

function Employees() {
  // Destructure the auth hook
//   const { isLogged, isAdmin } = useAuth()
  
//   if (isLogged) { 
//     if (isAdmin) {
//       return (
//         <div>
//           <div className="container-fluid admin-pages">
//             <div className="row">
//               <div className="col-md-3 admin-left-side">
//                 <AdminForm />
//               </div>
//               <div className="col-md-9 admin-right-side">
//          <EmployeeList/>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <h1>You are not authorized to access this page</h1>
//         </div>
//       );
//     }
//   } else {
//     return (
//       <div>
//         <LoginForm />
//       </div>
//     );
//   }
// }
return (
  <div>
    <div className="container-fluid admin-pages">
      <div className="row">
        <div className="col-md-3 admin-left-side">
          <AdminForm />
        </div>
        <div className="col-md-9 admin-right-side">
          <EmployeeList />
        </div>
      </div>
    </div>
  </div>
);
}

export default Employees;
