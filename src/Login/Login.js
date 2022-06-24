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
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../Login/Login.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { Email } from "@mui/icons-material";
import axios from "axios";

  const Login = () => {
    const paperStyle = {
    padding: 50,
    height: "auto",
    width: 500,
  };

  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "8px o" };
  const [signInData, setSignInData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
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
        `https://backend-ai-postgres.herokuapp.com/login`,
        signInData
      );
      console.log(response);
      localStorage.setItem("userLoggedLocal", true);
      localStorage.setItem("userLoggedRole", "superadmin");
      localStorage.setItem("jwt", response.data.token);

      navigate("/signin");
    } catch (err) {
      toast.error("Credentials are incorrect", {
        position: "bottom-right",
        autoClose: 5000,
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
          <Paper className="paper" elevation={10} style={paperStyle}>
            <form>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <AccountCircleOutlinedIcon />
                </Avatar>
                <h3 classname="title">Login</h3>
              </Grid>
              <br />
              <TextField
                id="outlined-basic"
                name="email"
                label="Username"
                variant="outlined"
                type={Email}
                fullWidth
                onChange={handleChange}
                // value={signInData.userName}
                error={false}
              />

              <br />
              <br />
              <TextField
                id="outlined-basic"
                name="password"
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                onChange={handleChange}
                // value={signInData.password}
                error={false}
              />

              <FormControlLabel
                control={<Checkbox name="checked" color="primary" />}
                label="Remember me "
              />

              <Button
                variant="contained"
                type="Submit"
                style={btnstyle}
                fullWidth
                onClick={handleSubmit}
              >
                Sign in{" "}
              </Button>

              <br />
              <br />
              <Grid align="center">
                <Typography>
                  <nav>
                    <Link to="forgotpassword">Recover your password</Link>
                  </nav>
                </Typography>
                <br />
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    </div>
  );
};

export default Login;
