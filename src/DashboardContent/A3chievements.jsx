import React from 'react'
import { Card, styled } from "@mui/material";

import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const A3chievements = () => {
    return (
        <Card sx={{ position: "relative" , bgcolor:"#E86819", color:"white"}}>
          <CardContent sx={{width:"65vw"}}>
            <Typography variant="h6" sx={{ letterSpacing: ".25px"
         }}>
             Users
            </Typography>
            
    
            <Typography variant="h5" sx={{my:3.1}}>19M</Typography>
            <Typography variant="body2">472,458 Target Users</Typography>
           
          </CardContent>
        </Card>
      );
}

export default A3chievements