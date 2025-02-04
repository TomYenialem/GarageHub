import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
// impoer react toaster
import { Toaster } from "react-hot-toast";

import Login from "./markup/pages/Login";
import Home from "./markup/pages/Home";
import AddEmployee from "./markup/pages/admin/AddEmployee";
// Import the css files
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file
import "./assets/styles/custom.css";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Unautherized from "./markup/pages/Unautherized";
import Order from "./markup/pages/admin/Orders";
import Customers from "./markup/pages/admin/Customers";
import Employees from "./markup/pages/admin/Employees";
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import CustomersList from "./markup/pages/admin/CustomersList";
import CustomerProfileLists from "./markup/pages/admin/CustomerProfileLists";
import NotFound from "./markup/pages/NotFound";
import AddNewServices from "./markup/pages/admin/AddNewServices";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/unauthorized"
          element={
            <div>
              <Unautherized />
            </div>
          }
        />
        <Route
          path="/admin/orders"
          element={
            <PrivateAuthRoute roles={[1, 2, 3]}>
              <Order />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/add_customers"
          element={
            <PrivateAuthRoute roles={[2, 3]}>
              <Customers />
            </PrivateAuthRoute>
          }
        />
        <Route
          path="/admin/add-employee"
          element={
            <PrivateAuthRoute roles={[3]}>
              <AddEmployee />
            </PrivateAuthRoute>
          }
        />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/all_customers" element={<CustomersList />} />

        <Route path ='/admin/services' element={<AddNewServices/>}/>
          <Route path="/admin/customer_profile" element={<CustomerProfileLists/>}/> 
        <Route path="/admin/customer_profile" element={<CustomerProfileLists/>}/> 
          <Route path="/admin/customer_profile" element={<CustomerProfileLists/>}/> 
        <Route path ='*' element={<NotFound/>} />

      </Routes>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;
