import React from "react";
import { BrowserRouter } from "react-router-dom";
// import Parent from "./Practice/index1";
// import StyledBadge from './Component/Active green'
// import Nav from './Component/Navbar'
// import ResponsiveDrawer from './Component/Sidebar'
import Loginsuper from "./Super-Admin/Login-super";
// import Toast from './Login/Toast'
// import MaterialSuperAdmin from "./Super-Admin/Material-Super-Adm";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <StyledBadge/> */}
        {/* <Nav/> */}
        {/* < ResponsiveDrawer/> */}
        {/* <MaterialSuperAdmin/> */}
        <Loginsuper />
        {/* <Parent/> */}
        {/* <Toast/> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
