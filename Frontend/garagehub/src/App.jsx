
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

function App() {


  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin/add-employee' element={<div><AddEmployee/></div>} />

     </Routes>
     <Footer/>
    </>
  )
}

export default App
