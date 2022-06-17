// import { Avatar, Button, Grid, Paper } from "@mui/material";
// import React from "react";
// import { Link } from "react-router-dom";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

// import { SettingsSuggestRounded } from "@mui/icons-material";
// import userEvent from "@testing-library/user-event";
// const Otp = () => {
//   const paperStyle = {
//     padding: 50,
//     height: "auto",
//     width: 300,
//   };
//   const avatarStyle = { backgroundColor: "#1976D2" };
//   const btnstyle = { margin: "8px o" };

//   const [counter, setCounter] = React.useState(10);
//   React.useEffect(()=>{
//     const timer =
//     counter > 0 && setInterval(()=> setCounter(counter - 1),1000);
//     return()=> clearInterval(timer);
//   },[counter]);
//   return (
//     <div className="login">
//       <Grid>
//         <Paper className="paper" elevation={10} style={paperStyle}>
//           <Grid align="center">
//             {" "}
//             <Avatar style={avatarStyle}>
//               <AccountCircleOutlinedIcon />
//             </Avatar>

//             <div className="Container">
//             <h2>OTP</h2>
//             <div className="userInput">

//             <input type="text" id="first" maxLength={1} onKeyUp="clickEvent(this,'sec')"/>
//             <input type="text" id="sec" maxLength={1} onKeyUp="clickEvent(this,'third')"/>
//             <input type="text" id="third" maxLength={1} onKeyUp="clickEvent(this,'fourth')"/>
//             <input type="text" id="fourth" maxLength={1} onKeyUp="clickEvent(this,'fifth')"/>
//             <input type="text" id="fifth" maxLength={1}  />
//             </div>
//             <br/>
//             <nav>
//             {" "}
//             <Link to="update" style={{ textDecoration: "none" }}>
//               {" "}
//               <Button
//                 variant="contained"
//                 type="Submit"
//                 style={btnstyle}
//                 fullWidth
//               >
//                 Verify{" "}
//               </Button>
//             </Link>
//           </nav>

//             </div>
//           </Grid>

//           <br />
//           <br />
//         </Paper>
//       </Grid>
//     </div>
//   );
// };

// export default Otp;

import { Avatar, Grid, Paper, Typography,Button, Link } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Box } from "@mui/system";
import {NavLink} from "react-router-dom"
import {useState} from "react";
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "../Login/Otp.css"
import LockOpenIcon from '@mui/icons-material/LockOpen';
import OTPInput, { ResendOTP } from "otp-input-react";



const Otp = ({resendOTP, ...rest }) => {
  const [OTP, setOTP] = useState("");
  <OTPInput value={OTP} onChange={setOTP} {...rest} />

  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 500,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "8px o" };
  const initialValues = { otp: "" };
  const [signInData, setSignInData] = useState(initialValues);
const [user, setUser] = useState({
  otp:"",
});
const {fname, lname, email, phone} = user;

const handleChange = e=>{
  setUser({...user,[e.target.name]: e.target.value});
};

const handleSubmit =(e)=>{
  
}

const [counter, setCounter]= React.useState(59);
React.useEffect(()=>{
  const timer=
  counter > 0 && setInterval(()=> setCounter( counter -1), 1000);
  return ()=> clearInterval(timer);
}, [counter]);
return(
  <div>

    <div>
    <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </div>
  
  <div className="login"> 
    <Grid>
  <Paper elevation ={10} style={paperStyle}>
    <Grid align="center">
      <Avatar style={{color:"white" ,backgroundColor:"red"}}><LockOpenIcon/></Avatar>
      <br/>
      <h2>OTP</h2>
      <h4 style={{color:"green"}}></h4>
        <Box color="text.secondary">
          <Typography variant ="body2">
            Enter OTP Sent to your  ******@gmail.com
          </Typography>
        </Box>
    </Grid>
<br/>
<ValidatorForm 
onSubmit ={handleSubmit}>
  <TextValidator
  label="Enter 6 Digit OTP"
  onchange={handleChange}
  variant="outlined"
  inputProps={{maxLength:6}}
  name="otp"
  size="small"
  disabled={false}
  resendOTP={{}}
  type="text"
  fullWidth
  // validators={['required']}
  // errorMessages={['OTP is required']}
  value={user.fname}/>



   <ResendOTP handelResendClick={() => alert("Resend clicked")} />




  <br/>
  <Button type='submit' color="primary" variant="contained" style={btnstyle} fullWidth>VERIFY</Button>
</ValidatorForm>

{/* <Box mt={3}>
  <Typography fontWeight={500} align="center" color="textSecondary">
    Resend OTP in <span style={{color:"green", fontWeight:"boid"}}>00:{counter}</span>
    </Typography>
  </Box>
  <Typography align="center">
    <NavLink to="otp">
      <span style={{marginLeft:"5 px"}}> Resend OTP</span>
    </NavLink>
  </Typography>
   */}
   {/* <ResendOTP
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <button {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Please wait for ${buttonProps.remainingTime} sec` : "Resend"}
              </button>
            );
          }}
        /> */}
</Paper>
</Grid>
</div>
</div>
);
};
export default Otp;
