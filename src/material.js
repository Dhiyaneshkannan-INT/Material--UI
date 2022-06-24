// import * as React from 'react';
// import Button from '@mui/material/Button';

// function Mi() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }
// export default Mi;
// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// export default function BasicButtons() {
//   return (
//     <Stack spacing={6} direction="row">
//       <Button variant="text" >Text</Button>
//       <Button variant="contained" color="success">Contained</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined" color="error">Outlined</Button>
//     </Stack>
//   );
// }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }

// /*Button click event*/


// import { Button, Container, Input, Paper } from "@mui/material";

// function Mi() {
//   return (
//     <Container
//       sx={{
//         maxWidth: "400px",
//       }}
//     >
//       <Paper
//         sx={{
//           marginTop: "2rem",
//           padding: "1rem",
//         }}
//       >
//         <Input fullwidth placeholder="First name" />
//         <br />
//         <Input fullwidth placeholder="last name" />
//         <br />
//         <Input fullwidth placeholder="Email" />
//         <br />
//         <Input fullwidth placeholder="Website" />
//         <br />
//         <Button
//           sx={{
//             marginTop: "2px",
//           }}
//           variant="contained"
//         >
//           Submit
//         </Button>
//       </Paper>
//     </Container>
//   );
// }
// export default Mi;

/*-----Material UI-----*/

// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

// import Drawer from "rsuite/Drawer";
// import * as React from "react";
// import { ButtonToolbar, IconButton, Radio, RadioGroup } from "rsuite";

// const styles = {
//   radioGroupLabel: {
//     padding: "8px 12px",
//     display: "inline-block",
//     verticalAlign: "middle",
//   },
// };

// const Mi = () => {
//   const [size, setSize] = React.useState("xs");
//   const [open, setOpen] = React.useState(false);
//   const [placement, setPlacement] = React.useState();

//   const handleOpen = (key) => {
//     setOpen(true);
//     setPlacement(key);
//   };
//   return (
//     <div>
//       <RadioGroup inline appearance="picker" value={size} onChange={setSize}>
//         <span style={styles.radioGroupLabel}>Size: </span>
//         <Radio value="full">Full page</Radio>
//         <Radio value="lg">Large</Radio>
//         <Radio value="md">Medium</Radio>
//         <Radio value="sm">Small</Radio>
//         <Radio value="xs">Xsmall</Radio>
//       </RadioGroup>
//       <hr />
//       <ButtonToolbar>
//         <IconButton
//           icon={<AngleRightIcon />}
//           onClick={() => handleOpen("left")}
//         >
//           Left
//         </IconButton>
//         <IconButton
//           icon={<AngleLeftIcon/>}
//           onClick={() => handleOpen("right")}
//         >
//           Right
//         </IconButton>
//         <IconButton icon={<AngleDownIcon />} onClick={() => handleOpen("top")}>
//           Top
//         </IconButton>
//         <IconButton icon={<AngleUpIcon />} onClick={() => handleOpen("bottom")}>
//           Bottom
//         </IconButton>
//       </ButtonToolbar>

//       <Drawer
//         size={size}
//         placement={placement}
//         open={open}
//         onClose={() => setOpen(false)}
//       >
//         <Drawer.Header>
//           <Drawer.Title>Drawer Title</Drawer.Title>
//           <Drawer.Actions>
//             <Button onClick={() => setOpen(false)}>Cancel</Button>
//             <Button onClick={() => setOpen(false)} appearance="primary">
//               Confirm
//             </Button>
//           </Drawer.Actions>
//         </Drawer.Header>
//         <Drawer.Body>
//           <Paragraph rows={8} />
//         </Drawer.Body>
//       </Drawer>
//     </div>
//   );
// };

// export default Mi;

// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
// import List from "@mui/material/List";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import Typography from "@mui/material/Typography";

// export default function TemporaryDrawer() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {["All mail", "Trash", "Spam"].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <div>
//         {["left", "right", "top", "bottom"].map((anchor) => (
//           <React.Fragment key={anchor}>
//             <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//             <Drawer
//               anchor={anchor}
//               open={state[anchor]}
//               onClose={toggleDrawer(anchor, false)}
//             >
//               {list(anchor)}
//             </Drawer>
//           </React.Fragment>
//         ))}
//       </div>

//     </div>
//   );
// }

// export default function FloatingActionButtons() {
//   return (
//     <Box sx={{ '& > :not(style)': { m: 1 } }}>
//       <Fab color="primary" aria-label="add">
//         <AddIcon />
//       </Fab>
//       <Fab color="secondary" aria-label="edit">
//         <EditIcon />
//       </Fab>
//       <Fab variant="extended">
//         <NavigationIcon sx={{ mr: 1 }} />
//         Navigate
//       </Fab>
//       <Fab disabled aria-label="like">
//         <FavoriteIcon />
//       </Fab>
//     </Box>
//   );
// }

// import React from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// export default function Mi() {
//   return (
//     <Box sx={{ width: "90%", maxWidth: 500 }}>
//       <Typography
//         variant="h1"
//         color="Red"
//         align="center"
//         component="div"
//         gutterBottom
//       >
//         h1. Dhiyanesh Kannan
//       </Typography>
//       <Typography variant="h2" component="div" gutterBottom>
//         h2. Heading
//       </Typography>
//       <Typography variant="h3" component="div" gutterBottom>
//         h3. Heading
//       </Typography>
//       <Typography variant="h4" gutterBottom component="div">
//         h4. Heading
//       </Typography>
//       <Typography variant="h5" gutterBottom component="div">
//         h5. Heading
//       </Typography>
//       <Typography variant="h6" gutterBottom component="div">
//         h6. Heading
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom component="div">
//         subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//         Quos blanditiis tenetur
//       </Typography>
//       <Typography variant="subtitle2" gutterBottom component="div">
//         subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//         Quos blanditiis tenetur
//       </Typography>
//       <Typography variant="body1" noWrap gutterBottom>
//         body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore
//         consectetur, neque doloribus, cupiditate numquam dignissimos laborum
//         fugiat deleniti? Eum quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="body2" gutterBottom>
//         body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
//         blanditiis tenetur unde suscipit, quam beatae rerum inventore
//         consectetur, neque doloribus, cupiditate numquam dignissimos laborum
//         fugiat deleniti? Eum quasi quidem quibusdam.
//       </Typography>
//       <Typography variant="button" display="block" gutterBottom>
//         button text
//       </Typography>
//       <Typography variant="caption" display="block" gutterBottom>
//         caption text
//       </Typography>
//       <Typography variant="overline" display="block" gutterBottom>
//         overline text
//       </Typography>
//     </Box>
//   );
// }


//OTP 

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


// const Otp = ({resendOTP, ...rest }) => {
//   const [OTP, setOTP] = useState("");
//   <OTPInput value={OTP} onChange={setOTP} {...rest} />