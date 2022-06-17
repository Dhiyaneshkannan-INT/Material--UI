// import React from "react";
// import "../Com-css/Sidebar.css"

// const Button= () => {
//   const handle = (e) => {
//     console.log("Ninja - Naruto", e.target);
//   };

//   const handleClick = (name) => {
//     console.log("Hello" + name);
//   };

//   return (
//     <div className="button">
//       <h2>Dhiyaneshkannan</h2>
//       <br />
//       <button id="click" onClick={handle}>
//         Click me
//       </button>
//       <br />
//       <br />
//       {/* Here we using Anonymous funtion */}
//       <button
//         id="click"
//         onClick={() => {
//           handleClick("Ninja");
//         }}
//       >
//         Click here{" "}
//       </button>
//       <br/>
//       <div >

//       <img className="button1" src={require("../Images/management1.png")} />
//       </div>
//       </div>
//   );
// };
// export default Button;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../Component/Button.css";
export default function MultiActionAreaCard() {
  return (
    <div className="card">
      {" "}
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea className="card1">
          <CardMedia
            component="img"
            height="140"
            src={require("../Images/jpg_44.webp")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
        <br />
        <CardActionArea className="card2">
          <CardMedia
            component="img"
            height="140"
            src={require("../Images/mine.jpg")}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
