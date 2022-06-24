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
import React, { useState } from "react";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import OutlinedInput from "@mui/material/OutlinedInput";
import "../Login/Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Forgot = () => {
  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 500,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "9px o" };


  const [values, setValues] = React.useState({
    password: "",
    confirmpassword: "",
    showPassword: false,
    showconfirmpassword: false,
  });

  
  // handle form events
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // handle submit
  const onSubmit = (data) => alert(JSON.stringify(data));


  //handle onChange 
  const handleChange =()=> {

  };



  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };


  const handleClickShowconfirmpassword = () => {
    console.log("first", values.showconfirmpassword);
    setValues({
      ...values,
      showconfirmpassword: !values.showconfirmpassword,
    });
  };




  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //    check password event
  const password = watch("password");

  return (
    <div className="login">
      <Grid onSubmit={handleSubmit(onSubmit)}>
        <Paper className="paper" elevation={10} style={paperStyle}>
          <Grid align="center">
            {" "}
            <Avatar style={avatarStyle}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <h2>UpdatePassword</h2>
          </Grid>
          <br />

          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <InputLabel type="password" htmlFor="outlined-adornment-password">
              New Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                  message:
                    "Password should include at least one uppercase, one numeric value and one special character",
                },
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum Required length is 20",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </FormControl>

          <br />

          <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
            <InputLabel type="password" htmlFor="outlined-adornment-password">
              Confirmation Password
            </InputLabel>

            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showconfirmpassword ? "text" : "password"}
              value={values.confirmpassword}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowconfirmpassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {!values.showconfirmpassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirmation Password"
              {...register("confirmPassword", { required: 'confirm password is required',
              validate: (value) =>
              value === password || "The passwords do not match",
           })}
            />
                {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
          </FormControl>
          <br />
          <br />

          <nav>
            {/* <Link to="/" style={{ textDecoration: "none" }}> */}
            <Button
              textDecoration="none"
              variant="contained"
              type="Submit"
              style={btnstyle}
              fullWidth
            >
              Update
            </Button>
            {/* </Link> */}
          </nav>
        </Paper>
      </Grid>
    </div>
  );
};

export default Forgot;
