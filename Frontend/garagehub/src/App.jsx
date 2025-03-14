import { Router, Route, Routes, useLocation } from "react-router-dom";
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
import Customers from "./markup/pages/admin/Customers";
import Employees from "./markup/pages/admin/Employees";
import PrivateAuthRoute from "./markup/components/Auth/PrivateAuthRoute";
import CustomersList from "./markup/pages/admin/CustomersList";
import CustomerProfileLists from "./markup/pages/admin/CustomerProfileLists";
import NotFound from "./markup/pages/NotFound";
import AddNewServices from "./markup/pages/admin/AddNewServices";
import OrdersPage from "./markup/pages/admin/OrdersPage";
import EditCustomer from "./markup/pages/admin/EditCustomer";
import EditEmployee from "./markup/pages/admin/EditEmployee";
import FinalOrderPage from "./markup/pages/admin/FinalOrderPage";
import GetAllOrdersInfo from "./markup/pages/admin/GetAllOrdersInfo";
import EditOrders from "./markup/pages/admin/EditOrders";
import { useEffect } from "react";
import EditVehicles from "./markup/pages/admin/EditVehicles";
import Admin from "./markup/pages/admin/Admin/Admin";
import About from "./markup/pages/About";
import Services from "./markup/pages/Services";
import Contact from "./markup/pages/Contact";
import CustomerOrder from "./markup/pages/CustomerOrder";

import CarStatusInfo from "./markup/pages/CarStatusInfo";

function App() {
  const { pathname } = useLocation();
  console.log(pathname);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/customer_order/:order_id" element={<CustomerOrder />} />
        <Route path="/customer_info" element={<CarStatusInfo />} />

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
            // <PrivateAuthRoute roles={[1, 2, 3]}>
            //   <OrdersPage />
            // </PrivateAuthRoute>
            <OrdersPage/>
          }
        />
        <Route
          path="/admin/add_customers"
          element={
     
              <Customers />
       
          }
        />
        <Route
          path="/admin/add-employee"
          element={
            // <PrivateAuthRoute roles={[1, 2, 3]}>
            //   <AddEmployee />
            // </PrivateAuthRoute>
              <AddEmployee />
          }
        />
        <Route path="/admin/employees" element={<Employees />} />
        <Route path="/admin/all_customers" element={<CustomersList />} />

        <Route path="/admin/services" element={<AddNewServices />} />
        <Route
          path="/admin/customer_profile/:customer_id"
          element={<CustomerProfileLists />}
        />
        <Route
          path="/admin/customer_edit/:customer_id"
          element={<EditCustomer />}
        />
        <Route
          path="/admin/employee_edit/:employee_id"
          element={<EditEmployee />}
        />
        <Route path="/admin/orders/:vehicle_id" element={<FinalOrderPage />} />
        <Route path="/admin/all_orders" element={<GetAllOrdersInfo />} />
        <Route path="/admin/edit_orders/:order_id" element={<EditOrders />} />
        <Route
          path="/admin/edit_vehicle/:vehicle_id"
          element={<EditVehicles />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
}

export default App;
