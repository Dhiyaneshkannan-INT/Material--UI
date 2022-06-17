import React from "react";
import "../Com-css/Sidebar.css";
import {   Routes, Route } from "react-router-dom";
import ResponsiveDrawer from "../Component/Sidebar";
import Button from "../Component/Button";
import Profile from "../Component/Profile"
import Password from "../Component/Password";
import "../Com-css/SuperAdmin.css"
const MaterialSuperAdmin = () => {
  return (
    <div>
      <div>
        <ResponsiveDrawer />
      </div>
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/profile" element ={<Profile/>}/>
          <Route path="/updatepassword" element={<Password/>}/>
        </Routes>
      </div>
    
  );
};
export default MaterialSuperAdmin;
