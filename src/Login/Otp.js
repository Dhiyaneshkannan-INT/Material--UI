import {
  Avatar,
  Grid,
  Paper,
  Typography,
  Button,
  Link,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import "../Login/Otp.css";
import axios from "axios";
import LockOpenIcon from "@mui/icons-material/LockOpen";

const Otp = () => {

  const [resendtime, setResendtime] = useState(false);

  setTimeout(enableResendBtn, 10000);
  function enableResendBtn() {
    setResendtime(true);
  }

  const navigate = useNavigate();

  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 500,
  };
  
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "8px o" };

  const [signInData, setSignInData] = useState();
  let buttonStatus = false;

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signInData);
    try {
      const response = await axios.post(
        `https://backend-ai-postgres.herokuapp.com/verify-otp`,
        signInData
      );
      toast.success(response.data, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(navigateFunc, 3000);
      function navigateFunc() {
        navigate("/forgotpassword/otp/update");
      }
      // .then(response => {
      //   console.log(response.data);
      //   navigate("/forgotpassword/otp/update");
      // });
    } catch (err) {
      toast.error("Credentials are incorrect", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      buttonStatus = true;
      clearInterval(timer);
    };
  }, [counter]);

  return (
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

      <div className="login">
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={{ color: "white", backgroundColor: "red" }}>
                <LockOpenIcon />
              </Avatar>
              <br />
              <h2>OTP</h2>
              <h4 style={{ color: "green" }}></h4>
              <Box color="text.secondary">
                <Typography variant="body2">
                  OTP has been sent to your Mail ID
                </Typography>
              </Box>
            </Grid>
            <br />
            <ValidatorForm onSubmit={handleSubmit}>
              <TextField
                label="Enter 6 Digit OTP"
                onChange={handleChange}
                variant="outlined"
                inputProps={{ maxLength: 6 }}
                name="otp"
                size="small"
                disabled={false}
                type="password"
                fullWidth
                // validators={['required']}
                // errorMessages={['OTP is required']}
                // value={user.fname}
              />
              {/* <ResendOTP handelResendClick={() => alert("Resend clicked")} /> */}
              <br />
              <br/>  
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                VERIFY
              </Button>
            </ValidatorForm>
            <Box mt={3}>
              <Typography fontWeight={500} align="center" color="textSecondary">
                Resend OTP in{" "}
                <span style={{ color: "green", fontWeight: "boid" }}>
                  00:{counter}
                </span>
              </Typography>
            </Box>
            <Typography align="center">
              {
            buttonStatus ?
            <NavLink to="otp"
              style={{ marginLeft: "5 px" }}> Resend OTP
            </NavLink> : null
          }

              {/* <p
                className="login-page-paragraph"
                style={{ display: resendtime ? "block" : "none" }}
              >
                Didn't Receive OTP <span className="otp-resend">Resend</span>
              </p> */}
            </Typography>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};
export default Otp;
