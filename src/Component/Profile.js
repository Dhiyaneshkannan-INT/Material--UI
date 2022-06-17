// import React from "react";
// import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
// import '../Com-css/SuperAdmin.css'
// const Profile = () => {
//   return (
//     <div className="s-adm-profile-container">
//       <h5 className="s-adm-profile-tlt"> *Profile Page*</h5>
//       <Form>
//         <Row>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="Fname">First name</Label>
//               <Input id="Fname" name="first_name" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="Lname">Last name</Label>
//               <Input id="Lname" name="last_name" />
//             </FormGroup>
//           </Col>

//           <Col md={6}>
//             <FormGroup>
//               <Label for="Email">Email</Label>
//               <Input id="Email" name="email_id" type="email" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="Phone">Mobile Number</Label>
//               <Input id="Phone" name="phone" />
//             </FormGroup>
//           </Col>

//           <Col md={6}>
//             <FormGroup>
//               <Label for="exampleAddress">Address</Label>
//               <Input id="exampleAddress" name="address" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="exampleCity">City</Label>
//               <Input id="exampleCity" name="city" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="exampleState">State</Label>
//               <Input id="exampleState" name="state" />
//             </FormGroup>
//           </Col>
//           <Col md={6}>
//             <FormGroup>
//               <Label for="exampleZip">Zip</Label>
//               <Input id="exampleZip" name="zip" />
//             </FormGroup>
//           </Col>
//         </Row>
//       </Form>
//     </div>
//   );
// };

// export default Profile;




// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';

// export default function Profile() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           m: 1,
//           width: 150,
//           height: 150,
//         },
//       }}
//     >
//       <Paper elevation={0} />
//       <Paper />
//       <Paper elevation={3} />
      
//     </Box>
//   );
// }




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
import React from "react";
import { Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../Login/Login.css";

const Profile = () => {
  const paperStyle = {
    padding: 50,
    height: "auto",
    width: 300,
  };
  const avatarStyle = { backgroundColor: "#1976D2" };
  const btnstyle = { margin: "8px o" };
  return (
    <div className="login">
      <Grid>
        <Paper className="paper" elevation={10} style={paperStyle}>
          <Grid align="center">
            {" "}
            <Avatar style={avatarStyle}>
              <AccountCircleOutlinedIcon />
            </Avatar>
            <h2>Profile-Demo</h2>
          </Grid>
         
       
          <nav>
            {" "}
            <Link to="signin" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="contained"
                type="Submit"
                style={btnstyle}
                fullWidth
              >
                Sign in{" "}
              </Button>
            </Link>
          </nav>

          <br />
          <br />
         
        </Paper>
      </Grid>
    </div>
  );
};

export default Profile;
