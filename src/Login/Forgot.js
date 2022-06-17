import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import MailLockOutlinedIcon from "@mui/icons-material/MailLockOutlined";
import "../Login/Login.css";
import { ToastContainer, toast } from "react-toastify";
import { Email } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Forgot = () => {
  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 500,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "9px o" };
  const initialValues = { email: "" };
  const [signInData, setSignInData] = useState(initialValues);
  const [signInErrors, setsignInErrors] = useState({});
  const [isSumbit, setisSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInData);
    if (signInData .email != "") {
      navigate("/forgotpassword/otp");
    } else {
      toast.error("Please enter the fields.", {
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
  return (
    <div>
      <div>
        {" "}
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
          <Paper className="paper" elevation={10} style={paperStyle}>
            <Grid align="center">
              {" "}
              <Avatar style={avatarStyle}>
                <MailLockOutlinedIcon />
              </Avatar>
              <br/>
              <h2>Email ID*</h2>
              <h6>
                Forgotten your password? Enter your email address below and
                we'll email instructions for setting a new one
              </h6>
            </Grid>
            <TextField
              id="outlined-basic"
              label="Email"
              name="email"
              variant="outlined"
              type={Email}
              fullWidth
              required
              onChange={handleChange}
            />
            <br />
            <br /> {/* <Link to="otp" style={{ textDecoration: "none" }}> */}{" "}
            <Button
              variant="contained"
              type="Submit"
              style={btnstyle}
              fullWidth
              onClick={handleSubmit}
            >
              next{" "}
            </Button>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Forgot;
