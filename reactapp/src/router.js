import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './login';
import RegisterForm from './signup';
import Navie from './dashboard';
import ContactPage from './contact';
import Home from './homes';
import AboutUs from './About';
import ServiceStatus from './status';
import PatientRecords from './software';
import Physical from './physical';
import Appointment from './BookAppointment';
export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<RegisterForm/>}></Route>  
        <Route exact path='/' element={<Navie/>}></Route>  
        <Route exact path='/contact' element={<ContactPage/>}></Route>  
        <Route exact path='/home' element={<Home/>}></Route>  
        <Route exact path='/About' element={<AboutUs/>}></Route>      
        <Route exact path='/status' element={<ServiceStatus/>}></Route>    
        <Route exact path='/software' element={<PatientRecords/>}></Route>    
        <Route exact path='/physical' element={<Physical/>}></Route>    
        <Route exact path='/appointment' element={<Appointment/>}></Route>    
        </Routes>
        </BrowserRouter>
    )
}
