import React from 'react'
import { Card, styled } from "@mui/material";

import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const A2chievements = () => {
    return (
        <Card sx={{ position: "relative" , bgcolor:"#96be25", color:"white"}}>
          <CardContent sx={{width:"65vw"}}>
            <Typography variant="h6" sx={{ letterSpacing: ".25px"
         }}>
             Bounce Rate
            </Typography>
            
    
            <Typography variant="h5" sx={{my:3.1}}>41.6%</Typography>
            <Typography variant="body2">472,458 Targeted Target Users</Typography>
           
          </CardContent>
        </Card>
      );
}

export default A2chievements