import { Card, styled } from "@mui/material";
import React from "react";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Triangle = styled("img")({
  right: 0,
  bottom: 0,
  height: 170,
  position: "absolute",
});
const TrophyImg = styled("img")({
  right: 20,
  bottom: 20,
  height: 98,
  position: "absolute",
  
});

const Achievements = () => {
  return (
    <Card sx={{ position: "relative" , bgcolor:"#1a89b4", color:"white"}}>
      <CardContent sx={{width:"65vw"}}>
        <Typography variant="h6" sx={{ letterSpacing: ".25px"
     }}>
         Visitors
        </Typography>
        

        <Typography variant="h5" sx={{my:3.1}}>13.7k</Typography>
        <Typography variant="body2">172,458 Target Users</Typography>
        {/* <Button size="small" variant="contained">
          View Sales
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default Achievements;
