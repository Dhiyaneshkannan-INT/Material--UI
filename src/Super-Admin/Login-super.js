import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Forgot from "../Login/Forgot";
import "../Com-css/SuperAdmin.css";
import Updatepassword from "../Login/Updatepassword";
import ResponsiveDrawer from "../Component/Sidebar";
import "../Com-css/Sidebar.css";
import Otp from "../Login/Otp"
 
import Profile from "../Component/Profile"
import Password from "../Component/Password";
const Loginsuper = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signin" element={<ResponsiveDrawer />} />
          <Route path="/profile" element ={<Profile/>}/>
          <Route path="/profile/signin" element ={<ResponsiveDrawer/>}/>
          <Route path="/updatepassword" element={<Password/>}/>
          <Route path="/updatepassword" element={<Login/>}/>
          <Route path="/logout" element={<Login/>}/>
          <Route path="/logout/signin" element={<ResponsiveDrawer/>}/>
          <Route path="/forgotpassword" element={<Forgot />} />
          <Route path="/forgotpassword/otp" element={<Otp />} />
          <Route path="/forgotpassword/otp/update" element={<Updatepassword />} />
        
        </Routes>
      </div>
    </div>
  );
};
export default Loginsuper;
