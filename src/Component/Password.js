import {
  Avatar,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Paper,
} from "@mui/material";
import React from "react";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import "../Login/Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Forgot = () => {
  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 300,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "9px o" };
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <Grid>
        <Paper className="paper" elevation={10} style={paperStyle}>
          <Grid align="center">
            {" "}
            <Avatar style={avatarStyle}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <h2>UpdatePassword</h2>
            
          </Grid>
          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel type="password" htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
          </FormControl>
          <br />

          <FormControl sx={{ m: 1, width: "35ch" }} variant="outlined">
            <InputLabel type="password" htmlFor="outlined-adornment-password">
              Confirmation Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirmation Password"
            />
          </FormControl>
          <br />
          <br/>
          <nav>
              {" "}
              <Link  to="/" style={{textDecoration:"none"}}>  <Button textDecoration="none" variant="contained" type="Submit" style={btnstyle} fullWidth>Change Password  </Button></Link>
            </nav>
        </Paper>
      </Grid>
    </div>
  );
};

export default Forgot;
