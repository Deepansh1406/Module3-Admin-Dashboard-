import React from 'react'
import { Card, styled } from "@mui/material";
import { CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const A4chievements = () => {
    return (
        <Card sx={{ position: "relative" , bgcolor:"#C72e7a", color:"white"}}>
          <CardContent sx={{width:"65vw"}}>
            <Typography variant="h6" sx={{ letterSpacing: ".25px"
         }}>
             New Contacts
            </Typography>
            
    
            <Typography variant="h5" sx={{my:3.1}}>75</Typography>
            <Typography variant="body2">472,458 Targeted Target Users</Typography>
           
          </CardContent>
        </Card>
      );
}

export default A4chievements