
import { Router, Route,Routes } from 'react-router-dom'
import './App.css'

import Login from './markup/pages/Login'
import Home from './markup/pages/Home'
import AddEmployee from './markup/pages/admin/AddEmployee'
// Import the css files 
import "./assets/template_assets/css/bootstrap.css";
import "./assets/template_assets/css/style.css";
import "./assets/template_assets/css/responsive.css";
import "./assets/template_assets/css/color.css";

// Import the custom css file 
import "./assets/styles/custom.css";
import Header from './markup/components/Header/Header'
import Footer from './markup/components/Footer/Footer'
import Unautherized from './markup/pages/Unautherized'
import Order from './markup/pages/admin/Orders'
import Customers from './markup/pages/admin/Customers'
import Employees from './markup/pages/admin/Employees'
import PrivateAuthRoute from './markup/components/Auth/PrivateAuthRoute'
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
          path="/admin/customers"
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
      <Route path='admin/employees' element={<Employees />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
